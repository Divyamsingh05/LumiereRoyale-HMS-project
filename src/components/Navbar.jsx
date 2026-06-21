import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Landmark } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rooms', path: '/rooms' },
    
    { name: 'Amenities', path: '/amenities' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(15, 17, 21, 0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
      padding: scrolled ? '0.75rem 0' : '1.5rem 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Landmark color="var(--primary)" size={26} />
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: 'white', letterSpacing: '-0.025em' }}>
            Lumiere Royale
          </span>
        </Link>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="md:flex hidden">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: location.pathname === link.path ? 'var(--primary)' : 'rgba(255,255,255,0.75)',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--primary)'}
              onMouseLeave={e => e.target.style.color = location.pathname === link.path ? 'var(--primary)' : 'rgba(255,255,255,0.75)'}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary" style={{ padding: '0.6rem 1.4rem', fontSize: '0.75rem' }}>
            Book Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: 'white', padding: '0.5rem', display: 'none' }}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: 'rgba(15,17,21,0.98)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          padding: '2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          animation: 'fadeIn 0.3s ease-out',
        }}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: location.pathname === link.path ? 'var(--primary)' : 'rgba(255,255,255,0.75)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                paddingBottom: '1rem',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/booking" className="btn-primary" style={{ textAlign: 'center', padding: '0.85rem' }}>
            Book Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          nav .md\\:flex { display: none !important; }
          nav .md\\:hidden { display: block !important; }
        }
        @media (min-width: 768px) {
          nav .md\\:flex { display: flex !important; }
          nav .md\\:hidden { display: none !important; }
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slowZoom { from { transform: scale(1); } to { transform: scale(1.1); } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out forwards; opacity: 0; }
      `}</style>
    </nav>
  );
};

export default Navbar;
