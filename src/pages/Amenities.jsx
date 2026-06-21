import React from 'react';
import { Waves, Star, Utensils, Dumbbell } from 'lucide-react';
 

const Amenities = () => {
  const amenityCategories = [
    {
      title: 'Fine Dining',
      icon: <Utensils size={28} />,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=2070',
      description: 'Culinary brilliance from Michelin-starred chefs. Experience flavors from across the globe in an elegant setting.',
      items: ['Signature Restaurant', 'Sky Lounge', 'Private Dining', 'Breakfast Buffet']
    },
    {
      title: 'Wellness & Spa',
      icon: <Star size={28} />,
      image: 'https://images.unsplash.com/photo-1544161515-436cefb5440d?auto=format&fit=crop&q=80&w=2070',
      description: 'Find serenity in our world-class spa. We offer a full range of revitalizing treatments and therapeutic massages.',
      items: ['Aroma Therapy', 'Sauna & Steam Room', 'Massage Suites', 'Beauty Salon']
    },
    {
      title: 'Fitness Center',
      icon: <Dumbbell size={28} />,
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070',
      description: 'Stay active with state-of-the-art equipment and personal training sessions in our high-tech gym.',
      items: ['Cardio Zone', 'Free Weights', 'Yoga Studio', 'Personal Trainers']
    },
    {
      title: 'Infinity Pool',
      icon: <Waves size={28} />,
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=2070',
      description: 'Swim with panoramic views of the city skyline. Our rooftop pool is the perfect place to unwind.',
      items: ['Temperature Control', 'Poolside Bar', 'Cabanas', 'Skyline Views']
    }
  ];

  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '5rem', background: 'var(--bg-dark)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>World Class Services</h4>
          <h1 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Unparalleled Amenities</h1>
          <p className="text-text-secondary mx-auto" style={{ maxWidth: '600px', fontSize: '1rem' }}>
            Experience the ultimate in luxury and convenience with our curated selection of premium amenities designed for your comfort.
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
          {amenityCategories.map((amenity, index) => (
            <div key={index} style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}>
              {/* Text block */}
              <div style={{ order: index % 2 !== 0 ? 2 : 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(201,160,80,0.1)', border: '1px solid rgba(201,160,80,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', flexShrink: 0 }}>
                    {amenity.icon}
                  </div>
                  <h2 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>{amenity.title}</h2>
                </div>
                <p className="text-text-secondary leading-relaxed mb-8" style={{ fontSize: '1rem' }}>{amenity.description}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {amenity.items.map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                      <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%', flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image block */}
              <div style={{ position: 'relative', borderRadius: '1rem', overflow: 'hidden', order: index % 2 !== 0 ? 1 : 2 }}>
                <img src={amenity.image} alt={amenity.title}
                  style={{ width: '100%', height: '380px', objectFit: 'cover', transition: 'transform 1s ease', display: 'block' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(201,160,80,0.08)', transition: 'opacity 0.3s ease', opacity: 0, pointerEvents: 'none' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
