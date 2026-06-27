import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import stripePackage from 'stripe';
import nodemailer from 'nodemailer';
import cron from 'node-cron';
import { 
  init as initDb, 
  getRooms, 
  getRoomById, 
  createBooking, 
  getBookings, 
  updateBookingPayment, 
  countRooms, 
  seedRooms 
} from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const stripe = process.env.STRIPE_SECRET_KEY ? stripePackage(process.env.STRIPE_SECRET_KEY) : null;

app.use(cors());
app.use(express.json());

// Initialize Database
initDb();

app.get('/api/bookings', requireAdmin, (req, res) => {
  try {
    const rows = getBookings();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

app.post('/api/bookings', (req, res) => {
  try {
    const { name, email, phone, roomType, checkIn, checkOut, guests } = req.body;
    if (!name || !email || !roomType || !checkIn || !checkOut) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const id = createBooking({ name, email, phone, roomType, checkIn, checkOut, guests: guests || 1 });

    // Send confirmation email (best-effort) — booking is PENDING until payment webhook marks PAID
    (async () => {
      try {
        const transporter = await getTransporter();
        const info = await transporter.sendMail({
          from: process.env.EMAIL_FROM || 'no-reply@lumiere.local',
          to: email,
          subject: `Booking Confirmed — ${roomType}`,
          text: `Hi ${name},\n\nYour booking for ${roomType} from ${checkIn} to ${checkOut} has been received. Booking ID: ${id}.\n\nThank you!`,
        });
        console.log('Confirmation email sent', info.messageId);
      } catch (e) {
        console.error('Failed to send email', e);
      }
    })();

    res.status(201).json({ id, message: 'Booking created' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create booking' });
  }
});

// Admin protection middleware: simple header-based password check
function requireAdmin(req, res, next) {
  const pw = process.env.ADMIN_PASSWORD || '';
  if (!pw) return res.status(403).json({ error: 'Admin not configured' });
  const provided = req.headers['x-admin-password'];
  if (provided && provided === pw) return next();
  return res.status(401).json({ error: 'Unauthorized' });
}

// Export bookings as CSV (admin only)
app.get('/api/bookings/export', requireAdmin, (req, res) => {
  try {
    const rows = getBookings();
    const header = Object.keys(rows[0] || {}).join(',') + '\n';
    const body = rows.map(r => Object.values(r).map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const csv = header + body;
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="bookings.csv"');
    res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to export bookings' });
  }
});

// Trigger send report now (admin only)
app.post('/api/send-report', requireAdmin, async (req, res) => {
  try {
    await sendBookingsReport();
    res.json({ message: 'Report sent' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send report' });
  }
});

// Schedule daily report if configured
const REPORT_EMAIL = process.env.REPORT_EMAIL || process.env.ADMIN_EMAIL;
const REPORT_CRON = process.env.REPORT_CRON_SCHEDULE || '0 8 * * *'; // default daily at 08:00
if (REPORT_EMAIL) {
  cron.schedule(REPORT_CRON, () => {
    console.log('Running scheduled bookings report');
    sendBookingsReport().catch(err => console.error('Scheduled report failed', err));
  });
}

async function sendBookingsReport() {
  const rows = getBookings();
  const header = Object.keys(rows[0] || {}).join(',') + '\n';
  const body = rows.map(r => Object.values(r).map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const csv = header + body;
  const transporter = await getTransporter();
  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'no-reply@lumiere.local',
    to: process.env.REPORT_EMAIL || process.env.ADMIN_EMAIL,
    subject: 'Daily Bookings Report',
    text: 'Attached is the latest bookings report.',
    attachments: [{ filename: 'bookings.csv', content: csv }],
  });
  console.log('Report sent', info.messageId);
}

// Simple seed endpoint (safe to remove in production)
app.post('/api/seed', (req, res) => {
  try {
    if (countRooms() > 0) return res.status(200).json({ message: 'Already seeded' });
    const rooms = [
      { id: 1, name: 'Deluxe Suite', category: 'Luxury', price: 450, guests: 2, size: '45m²', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=2070', banner: null, desc: 'Spacious and luxurious suite.' },
      { id: 2, name: 'Presidential Suite', category: 'Ultra-Luxury', price: 1200, guests: 4, size: '120m²', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070', banner: null, desc: 'Top-tier suite with services.' },
      { id: 3, name: 'Ocean View Room', category: 'Luxury', price: 650, guests: 2, size: '55m²', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2070', banner: null, desc: 'Wake up to ocean views.' },
      { id: 4, name: 'Family Garden Suite', category: 'Family', price: 550, guests: 4, size: '70m²', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070', banner: null, desc: 'Comfortable family suite.' },
      { id: 5, name: 'Junior Suite', category: 'Standard', price: 300, guests: 2, size: '35m²', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=2070', banner: null, desc: 'Cozy and well-appointed.' },
      { id: 6, name: 'Honeymoon Loft', category: 'Romantic', price: 800, guests: 2, size: '65m²', image: 'https://images.unsplash.com/photo-1512918766674-562f1efd3688?auto=format&fit=crop&q=80&w=2070', banner: null, desc: 'Perfect for couples.' },
    ];
    seedRooms(rooms);
    res.json({ message: 'Seeded rooms' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Seeding failed' });
  }
});

// Create a Stripe Checkout session for a booking (no payment capture here — test mode)
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { roomName, amount, booking } = req.body; // amount in cents
    if (!stripe) return res.status(500).json({ error: 'Stripe not configured' });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{ price_data: { currency: 'usd', product_data: { name: roomName }, unit_amount: amount }, quantity: 1 }],
      success_url: (process.env.CLIENT_ORIGIN || 'http://localhost:5173') + '/booking?success=true',
      cancel_url: (process.env.CLIENT_ORIGIN || 'http://localhost:5173') + '/booking?canceled=true',
      metadata: { bookingId: booking?.id ? String(booking.id) : '' },
    });

    // if we have a booking id, update the record with stripe session id
    if (booking && booking.id) {
      try { updateBookingPayment(booking.id, { stripe_session: session.id }); } catch (e) { console.error('Failed to update booking with stripe session', e); }
    }
    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// Stripe webhook endpoint — verify signature and mark booking PAID
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  let event;
  try {
    if (secret && stripe && sig) {
      event = stripe.webhooks.constructEvent(req.body, sig, secret);
    } else {
      // If webhook secret not configured, try to parse body directly (not secure)
      event = JSON.parse(req.body.toString());
    }
  } catch (err) {
    console.error('Webhook signature verification failed.', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata?.bookingId;
    if (bookingId) {
      try {
        updateBookingPayment(Number(bookingId), { status: 'PAID', stripe_session: session.id });
        console.log('Booking marked as PAID', bookingId);
      } catch (e) { console.error('Failed to mark booking paid', e); }
    }
  }

  res.json({ received: true });
});

async function getTransporter() {
  // Use SMTP config from env; if not provided, create Ethereal test account
  if (process.env.SMTP_HOST && process.env.SMTP_USER) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
  }
  // Ethereal account for local testing
  const testAccount = await nodemailer.createTestAccount();
  return nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
}

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
