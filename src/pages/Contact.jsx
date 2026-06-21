import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
 

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const info = [
    { Icon: MapPin, title: 'Our Address', desc: '123 Elite Avenue, Gold City, GC 45678' },
    { Icon: Phone, title: 'Phone Support', desc: '+1 (234) 567-890' },
    { Icon: Mail, title: 'Email Address', desc: 'reservations@lumiereroyale.com' },
    { Icon: Clock, title: 'Working Hours', desc: 'Mon–Sun: 24/7 Support' },
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{ position: 'relative', height: 'clamp(200px, 35vw, 380px)', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&q=80&w=2070"
          alt="Contact Lumiere Royale"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,17,21,0.4), rgba(15,17,21,0.9))' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-3" style={{ fontSize: '0.75rem' }}>Get In Touch</h4>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Contact Us</h1>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p className="text-text-secondary mx-auto" style={{ maxWidth: '580px', fontSize: '1rem' }}>
            Our dedicated team is available 24/7 to assist with your reservations and inquiries. Please feel free to reach out to us.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

          {/* Info */}
          <div>
            <h3 className="font-serif font-bold text-white mb-8" style={{ fontSize: '1.75rem' }}>Hotel Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {info.map(({ Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '50px', height: '50px', background: 'rgba(201,160,80,0.1)', border: '1px solid rgba(201,160,80,0.25)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.25rem' }}>{title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div style={{ marginTop: '3rem', borderRadius: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                alt="Hotel location map"
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>

          {/* Form */}
          <div className="glass" style={{ padding: '2.5rem', borderRadius: '1rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{ width: '70px', height: '70px', background: 'rgba(201,160,80,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-serif font-bold text-white mb-3" style={{ fontSize: '1.75rem' }}>Message Sent!</h3>
                <p className="text-text-secondary mb-6">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="btn-primary">Send Another Message</button>
              </div>
            ) : (
              <>
                <h3 className="font-serif font-bold text-white mb-8" style={{ fontSize: '1.75rem' }}>Send Us A Message</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label>Full Name</label>
                      <input type="text" required placeholder="John Doe" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label>Email Address</label>
                      <input type="email" required placeholder="john@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                    </div>
                  </div>
                  <div>
                    <label>Subject</label>
                    <input type="text" required placeholder="Reservation inquiry" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                  </div>
                  <div>
                    <label>Message</label>
                    <textarea rows="5" required placeholder="How can we help you?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'none' }} />
                  </div>
                  <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', padding: '1rem' }}>
                    Send Message <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
