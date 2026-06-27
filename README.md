# 🏰 Lumiere Royale — Hotel Management System

Lumiere Royale is a premium, full-stack hotel management and booking platform designed for elite hospitality experiences. It features a modern, responsive user interface built with React and a robust Node.js backend with integrated Stripe payments.

![Lumiere Royale Hero](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070)

## ✨ Key Features

- **🏨 Room Browsing**: Explore a curated list of luxury rooms with detailed specifications.
- **📅 Real-time Booking**: Seamlessly book rooms with an intuitive calendar-based process.
- **💳 Stripe Integration**: Secure payment processing for bookings using Stripe Checkout.
- **📧 Automated Notifications**: Instant booking confirmations and daily reports via Nodemailer.
- **🛠️ Admin Dashboard**: Manage bookings, export data to CSV, and monitor revenue.
- **📱 Ultra-Responsive**: Stunning glassmorphism UI that works perfectly on all devices.
- **📊 Daily Reports**: Automated cron jobs for sending daily management reports.

## 🛠️ Technology Stack

### Frontend
- **React 19**
- **Vite**
- **Lucide React** (Icons)
- **Tailwind CSS** (for styling)
- **React Router Dom**

### Backend
- **Node.js & Express**
- **SQLite** (via `better-sqlite3`)
- **Stripe API** (Payments)
- **Nodemailer** (Emails)
- **Node-Cron** (Automated tasks)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Stripe Account (for payment features)

### 1. Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/LumiereRoyale-HMS.git
cd LumiereRoyale-HMS
```

### 2. Install Dependencies
```bash
# Install frontend dependencies
npm install

# Install server dependencies
cd server
npm install
cd ..
```

### 3. Environment Setup
Create a `.env` file in the root based on `.env.example`:
```env
STRIPE_SECRET_KEY=your_secret_key
STRIPE_PUBLISHABLE_KEY=your_pub_key
VITE_STRIPE_PUBLISHABLE_KEY=your_pub_key
ADMIN_PASSWORD=your_secure_password
```

### 4. Run the Application
```bash
# Run server
cd server
npm run start

# In a new terminal, run frontend
npm run dev
```

## 📄 License
Balanced under the MIT License - see the [LICENSE](LICENSE) file for details.

Developed with ❤️ by [Divyam Singh](https://github.com/Divyamsingh05)
