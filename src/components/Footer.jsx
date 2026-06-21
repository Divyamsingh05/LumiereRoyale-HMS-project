import React from 'react';
import { Link } from 'react-router-dom';
import { Landmark, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#0a0c10', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Landmark color="var(--primary)" size={28} />
              <span style={{ fontFamily: 'Playfair Display,serif', fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>Lumiere Royale</span>
            </Link>
            <p className="text-text-secondary" style={{ fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Experience the pinnacle of luxury and hospitality in the heart of the city. Our commitment to excellence ensures an unforgettable stay.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[Globe, Globe, Globe].map((Icon, i) => (
                <a key={i} href="#" style={{ width: '36px', height: '36px', background: 'rgba(201,160,80,0.1)', border: '1px solid rgba(201,160,80,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary)'; e.currentTarget.style.color = 'var(--bg-dark)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,160,80,0.1)'; e.currentTarget.style.color = 'var(--primary)'; }}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display,serif', color: 'white', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Our Rooms', path: '/rooms' },
                { label: 'Amenities', path: '/amenities' },
                { label: 'About Us', path: '/about' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="footer-link"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display,serif', color: 'white', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Our Services</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['Spa & Wellness', 'Fine Dining', 'Luxury Transfers', 'Event Planning', 'Personal Butler'].map(s => (
                <li key={s} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Playfair Display,serif', color: 'white', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem' }}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { Icon: MapPin, text: '123 Elite Avenue, Gold City, GC 45678' },
                { Icon: Phone, text: '+1 (234) 567-890' },
                { Icon: Mail, text: 'reservations@lumiereroyale.com' },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <Icon size={16} color="var(--primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            © 2026 Lumiere Royale Hotel. All Rights Reserved.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(label => (
              <a key={label} href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', transition: 'color 0.3s ease' }}
                onMouseEnter={e => e.target.style.color = 'var(--primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
