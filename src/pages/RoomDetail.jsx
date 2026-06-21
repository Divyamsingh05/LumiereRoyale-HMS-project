import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Wifi, Coffee, Waves, Users, Maximize, ArrowLeft, CheckCircle } from 'lucide-react';

const RoomDetail = () => {
  const { id } = useParams();

  const rooms = {
    1: {
      name: 'Presidential Suite',
      price: 1200,
      guests: 4,
      size: '120m²',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=2070',
      banner: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=2070',
      desc: 'Indulge in the pinnacle of luxury in our Presidential Suite. Sweeping panoramic views, bespoke furnishings, and a dedicated butler service define this extraordinary experience.',
    },
    2: {
      name: 'Deluxe Ocean View',
      price: 650,
      guests: 2,
      size: '55m²',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=2070',
      banner: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070',
      desc: 'Wake up to the gentle sound of waves in our Deluxe Ocean View room. Floor-to-ceiling windows frame a stunning seascape, creating a perfect romantic retreat.',
    },
    3: {
      name: 'Royal Garden Suite',
      price: 850,
      guests: 3,
      size: '75m²',
      image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=2070',
      banner: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070',
      desc: 'Our Royal Garden Suite opens onto a lush private garden. Styled with timeless elegance and surrounded by nature, this suite offers a tranquil escape from the world.',
    },
    4: {
      name: 'Family Garden Suite',
      price: 550,
      guests: 4,
      size: '70m²',
      image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2070',
      banner: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=2070',
      desc: 'Designed with families in mind, our Family Garden Suite provides spacious, warm, and comfortable living for up to 4 guests, with direct garden access and a dedicated kids corner.',
    },
    5: {
      name: 'Junior Suite',
      price: 300,
      guests: 2,
      size: '35m²',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&fit=crop&q=80&w=2070',
      banner: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2070',
      desc: 'The perfect introduction to Lumiere Royale luxury. Our Junior Suite is elegantly appointed with a king-sized bed, work desk, and premium amenities — ideal for the discerning business or leisure traveler.',
    },
    6: {
      name: 'Honeymoon Loft',
      price: 800,
      guests: 2,
      size: '65m²',
      image: 'https://images.unsplash.com/photo-1512918766674-562f1efd3688?auto=format&fit=crop&q=80&w=2070',
      banner: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=2070',
      desc: 'Created exclusively for couples, our Honeymoon Loft features a private terrace with city views, a deep soaking tub for two, and personalized romantic touches throughout your stay.',
    },
  };

  const room = rooms[id] || rooms[1];

  const amenities = [
    { icon: <Wifi size={16} />, label: 'High Speed Wifi' },
    { icon: <Coffee size={16} />, label: 'Premium Coffee Maker' },
    { icon: <Waves size={16} />, label: 'Luxury Jacuzzi Bath' },
    { icon: <Star size={16} />, label: '24/7 Room Service' },
    { icon: <CheckCircle size={16} />, label: 'Mini Bar Included' },
    { icon: <CheckCircle size={16} />, label: 'In-Room Safe' },
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', paddingBottom: '5rem' }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', height: 'clamp(260px, 45vw, 520px)', overflow: 'hidden' }}>
        <img
          src={room.banner}
          alt={room.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,17,21,0.3) 0%, rgba(15,17,21,0.85) 100%)' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)' }}>
          <Link to="/rooms" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem', transition: 'color 0.3s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>
            <ArrowLeft size={14} /> Back to Rooms
          </Link>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>{room.name}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: '4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Room Image + Price */}
          <div>
            <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', marginBottom: '1.5rem' }}>
              <img src={room.image} alt={room.name} style={{ width: '100%', height: '340px', objectFit: 'cover', display: 'block' }} />
              <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', background: 'rgba(15,17,21,0.9)', backdropFilter: 'blur(8px)', border: '1px solid rgba(201,160,80,0.4)', padding: '0.4rem 1.1rem', borderRadius: '9999px', color: 'var(--primary)', fontWeight: 700, fontSize: '1rem' }}>
                ${room.price}<span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'rgba(255,255,255,0.6)' }}>/night</span>
              </div>
            </div>

            {/* Stars */}
            <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
              {Array(5).fill(0).map((_, i) => <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />)}
            </div>

            {/* Quick Info */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1.25rem 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Users size={22} color="var(--primary)" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Guests</span>
                  <span style={{ fontWeight: 700, color: 'white', fontSize: '1rem' }}>{room.guests} Adults</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Maximize size={22} color="var(--primary)" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Room Size</span>
                  <span style={{ fontWeight: 700, color: 'white', fontSize: '1rem' }}>{room.size}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Room Details */}
          <div>
            <h2 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{room.name}</h2>
            <p className="text-text-secondary leading-relaxed mb-8" style={{ fontSize: '1rem' }}>{room.desc}</p>

            <h3 className="font-serif font-bold text-white mb-4" style={{ fontSize: '1.3rem' }}>Room Amenities</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2.5rem' }}>
              {amenities.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <span style={{ color: 'var(--primary)' }}>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            <Link to="/booking" className="btn-primary" style={{ width: '100%', padding: '1.1rem', fontSize: '0.9rem', display: 'flex', justifyContent: 'center' }}>
              Reserve This Suite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
