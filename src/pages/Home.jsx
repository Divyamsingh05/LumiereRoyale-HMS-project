import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Coffee, Wifi, Waves, ShieldCheck } from 'lucide-react';

const Home = () => {
  const featuredRooms = [
    { id: 1, name: 'Presidential Suite', price: 1200, image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070' },
    { id: 2, name: 'Deluxe Ocean View', price: 650, image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2070' },
    { id: 3, name: 'Royal Garden Suite', price: 850, image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=2070' },
  ];

  const amenities = [
    { icon: <Wifi size={28} />, title: 'High-Speed Wifi', desc: 'Secure and fast connectivity everywhere' },
    { icon: <Coffee size={28} />, title: 'Elite Dining', desc: 'Culinary excellence from global chefs' },
    { icon: <Waves size={28} />, title: 'Infinity Pool', desc: 'Relax with panoramic city views' },
    { icon: <Star size={28} />, title: 'Luxury Spa', desc: 'Revitalize your body and mind' },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070"
            style={{ width: '100%', height: '100%', objectFit: 'cover', animation: 'slowZoom 20s infinite alternate' }}
            alt="Lumiere Royale Hotel"
          />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem' }}>
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-4 animate-fade-in-up" style={{ fontSize: '0.8rem' }}>Welcome to Lumiere Royale</h4>
          <h1 className="font-serif font-bold text-white mb-6 animate-fade-in-up" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', lineHeight: 1.1, animationDelay: '0.2s' }}>
            Where Luxury <br /><span className="text-primary">Meets Serenity</span>
          </h1>
          <p className="text-text-secondary mb-10 mx-auto animate-fade-in-up" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: '600px', animationDelay: '0.4s' }}>
            Experience an unparalleled level of luxury, impeccable service, and breathtaking views in the heart of the city.
          </p>
          <div className="flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/rooms" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '0.9rem' }}>
              Explore Rooms <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="section-padding bg-bg-dark">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '0.75rem' }}>
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=2070"
              style={{ borderRadius: '0.75rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', width: '100%', display: 'block' }}
              alt=""
            />
          </div>
          <div>
            <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>Our Legacy</h4>
            <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>Refining The Art Of Hospitality Since 1920</h2>
            <p className="text-text-secondary mb-8 leading-relaxed">
              For over a century, Lumiere Royale has set the standard for luxury living. Our dedication to guest satisfaction and attention to every minute detail makes us the preferred choice for discerning travelers.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="flex items-center gap-3">
                <div style={{ width: '48px', height: '48px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}><Star size={20} /></div>
                <span className="font-semibold text-white">5-Star Quality</span>
              </div>
              <div className="flex items-center gap-3">
                <div style={{ width: '48px', height: '48px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}><ShieldCheck size={20} /></div>
                <span className="font-semibold text-white">Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding" style={{ background: '#0a0c10' }}>
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-primary font-semibold tracking-widest uppercase mb-3" style={{ fontSize: '0.75rem' }}>Discover</h4>
              <h2 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>Luxury Suites</h2>
            </div>
            <Link to="/rooms" className="text-primary flex items-center gap-2" style={{ fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {featuredRooms.map(room => (
              <div key={room.id} className="glass rounded-xl overflow-hidden" style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img src={room.image} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                    alt={room.name} />
                  <div className="glass" style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.3rem 1rem', borderRadius: '9999px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem' }}>
                    ${room.price}/Night
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 className="font-serif font-bold text-white mb-4" style={{ fontSize: '1.3rem' }}>{room.name}</h3>
                  <div className="flex gap-4 text-text-secondary mb-6" style={{ fontSize: '0.8rem' }}>
                    <span className="flex items-center gap-2"><Wifi size={14} /> Free Wifi</span>
                    <span className="flex items-center gap-2"><Coffee size={14} /> Breakfast</span>
                  </div>
                  <Link to={`/room/${room.id}`} style={{ display: 'block', textAlign: 'center', border: '1px solid var(--primary)', color: 'var(--primary)', padding: '0.7rem', borderRadius: '4px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '1px', fontSize: '0.75rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={e => { e.target.style.background = 'var(--primary)'; e.target.style.color = 'var(--bg-dark)'; }}
                    onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = 'var(--primary)'; }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="section-padding bg-bg-dark">
        <div className="container">
          <div className="text-center mb-16">
            <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>World Class</h4>
            <h2 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>Premium Amenities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {amenities.map((item, index) => (
              <div key={index} className="glass rounded-xl text-center" style={{ padding: '2.5rem 1.5rem', transition: 'transform 0.3s ease' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ width: '64px', height: '64px', background: 'rgba(201,160,80,0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', margin: '0 auto 1.5rem' }}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-3" style={{ fontSize: '1.1rem' }}>{item.title}</h3>
                <p className="text-text-secondary" style={{ fontSize: '0.875rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #0a0c10 0%, #1a1400 50%, #0a0c10 100%)', padding: '6rem 0', textAlign: 'center' }}>
        <div className="container">
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>Ready to Book?</h4>
          <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>Start Your Luxury Journey</h2>
          <p className="text-text-secondary mb-10 mx-auto" style={{ maxWidth: '500px' }}>Reserve your stay today and experience the finest in luxury hospitality.</p>
          <Link to="/booking" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '0.9rem' }}>Book Your Stay</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
