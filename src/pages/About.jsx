import React from 'react';
 
import { Star, Award, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Excellence', value: '100+' },
    { label: 'Luxury Suites', value: '250' },
    { label: 'Global Awards', value: '45' },
    { label: 'Happy Guests', value: '1M+' },
  ];

  const leaders = [
    { name: 'Alexandre Lumiere', role: 'Founder & Architect', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800' },
    { name: 'Elena Royale', role: 'Design Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800' },
    { name: 'Julian Vance', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', paddingBottom: '5rem' }}>
      {/* Hero Banner */}
      <div style={{ position: 'relative', height: 'clamp(220px, 40vw, 420px)', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&q=80&w=2070"
          alt="About Lumiere Royale"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,17,21,0.4), rgba(15,17,21,0.85))' }} />
        <div className="container" style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-3" style={{ fontSize: '0.75rem' }}>Our Story</h4>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>A Century of Timeless Elegance</h1>
        </div>
      </div>

      {/* Vision Section */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>Founded 1926</h4>
            <h2 className="font-serif font-bold text-white mb-6" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.8rem)' }}>Where History Meets Modern Luxury</h2>
            <p className="text-text-secondary leading-relaxed mb-6" style={{ fontSize: '1rem' }}>
              Founded in 1926, Lumiere Royale began as a vision to create a sanctuary of luxury and sophistication. Over the decades, we have hosted royalty, world leaders, and icons of cinema, evolving while maintaining our core values of unparalleled service and refined luxury.
            </p>
            <p className="text-text-secondary leading-relaxed mb-10" style={{ fontSize: '1rem' }}>
              Our philosophy is simple: every guest deserves to be treated like royalty. From the hand-crafted furnishings in our suites to the personalized service provided by our dedicated staff, every element of Lumiere Royale is designed to exceed expectations.
            </p>
            <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Award size={36} color="var(--primary)" />
                <span style={{ color: 'white', fontWeight: 700 }}>Award Winning</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Heart size={36} color="var(--primary)" />
                <span style={{ color: 'white', fontWeight: 700 }}>Guest Centric</span>
              </div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <img
              src="https://images.unsplash.com/photo-1544124499-58d89e52c803?auto=format&fit=crop&q=80&w=2070"
              alt="Hotel Interior"
              style={{ borderRadius: '1rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', width: '100%', display: 'block', position: 'relative', zIndex: 1 }}
            />
            <div style={{ position: 'absolute', top: '-1.5rem', left: '-1.5rem', width: '130px', height: '130px', background: 'rgba(15,17,21,0.9)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', textAlign: 'center' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', color: 'var(--primary)', fontWeight: 700, fontSize: '2rem', fontStyle: 'italic', lineHeight: 1.2 }}>Est. 1926</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'rgba(255,255,255,0.03)', borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '5rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '3rem', textAlign: 'center' }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <span style={{ display: 'block', fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--primary)', lineHeight: 1 }}>{stat.value}</span>
              <span style={{ display: 'block', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.7rem', fontWeight: 600, marginTop: '0.75rem' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h4 className="text-primary font-semibold tracking-widest uppercase mb-4" style={{ fontSize: '0.75rem' }}>Leadership</h4>
            <h2 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 3vw, 3rem)' }}>The Visionaries</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {leaders.map((leader, i) => (
              <div key={i} className="glass rounded-xl overflow-hidden" style={{ textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.querySelector('img').style.filter = 'grayscale(0%)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.querySelector('img').style.filter = 'grayscale(100%)'; }}>
                <div style={{ height: '280px', overflow: 'hidden' }}>
                  <img src={leader.image} alt={leader.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', filter: 'grayscale(100%)', transition: 'filter 0.7s ease' }} />
                </div>
                <div style={{ padding: '1.75rem' }}>
                  <h3 className="font-serif font-bold text-white mb-2" style={{ fontSize: '1.3rem' }}>{leader.name}</h3>
                  <p className="text-primary uppercase tracking-widest" style={{ fontSize: '0.72rem', fontWeight: 700 }}>{leader.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
