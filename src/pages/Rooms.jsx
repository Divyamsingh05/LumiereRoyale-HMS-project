import React, { useState } from 'react';
import { Wifi, Coffee, Star, Waves, Users, Maximize, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Rooms = () => {
  const [filter, setFilter] = useState('All');

  const rooms = [
    { id: 1, name: 'Deluxe Suite', category: 'Luxury', price: 450, guests: 2, size: '45m²', image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=2070' },
    { id: 2, name: 'Presidential Suite', category: 'Ultra-Luxury', price: 1200, guests: 4, size: '120m²', image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070' },
    { id: 3, name: 'Ocean View Room', category: 'Luxury', price: 650, guests: 2, size: '55m²', image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2070' },
    { id: 4, name: 'Family Garden Suite', category: 'Family', price: 550, guests: 4, size: '70m²', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070' },
    { id: 5, name: 'Junior Suite', category: 'Standard', price: 300, guests: 2, size: '35m²', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=2070' },
    { id: 6, name: 'Honeymoon Loft', category: 'Romantic', price: 800, guests: 2, size: '65m²', image: 'https://images.unsplash.com/photo-1512918766674-562f1efd3688?auto=format&fit=crop&q=80&w=2070' },
  ];

  const categories = ['All', 'Ultra-Luxury', 'Luxury', 'Family', 'Standard', 'Romantic'];
  const filteredRooms = filter === 'All' ? rooms : rooms.filter(r => r.category === filter);

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '5rem', background: 'var(--bg-dark)', minHeight: '100vh' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>Accommodations</h4>
          <h1 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Our Luxury Suites</h1>
          <p className="text-text-secondary mx-auto" style={{ maxWidth: '600px', fontSize: '1rem' }}>
            Discover our range of meticulously designed rooms and suites, each offering a unique blend of comfort and elegance.
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                border: `1px solid ${filter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.15)'}`,
                background: filter === cat ? 'var(--primary)' : 'transparent',
                color: filter === cat ? 'var(--bg-dark)' : 'var(--text-secondary)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Rooms Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {filteredRooms.map(room => (
            <div key={room.id} className="glass rounded-xl overflow-hidden" style={{ display: 'flex', flexDirection: 'column', transition: 'transform 0.3s ease' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                <img src={room.image} alt={room.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(15,17,21,0.9)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.9rem', borderRadius: '9999px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem' }}>
                  ${room.price}/Night
                </div>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <h3 className="font-serif font-bold text-white" style={{ fontSize: '1.25rem' }}>{room.name}</h3>
                  <div style={{ display: 'flex', color: 'var(--primary)' }}>
                    {Array(5).fill(0).map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '0.75rem 0', marginBottom: '1rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Users size={14} /> {room.guests} Guests</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Maximize size={14} /> {room.size}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                    <Wifi size={14} /><Coffee size={14} /><Waves size={14} />
                  </div>
                  <Link to="/booking" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--primary)', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.75rem', transition: 'gap 0.3s ease' }}>
                    Book Now <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
