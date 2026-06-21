import React, { useState } from 'react';
import { CreditCard, User, Mail, Phone, CheckCircle, ArrowRight, ArrowLeft, ShieldCheck, Lock } from 'lucide-react';

const Booking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', roomType: 'Deluxe Suite',
    checkIn: '', checkOut: '', guests: 1,
    cardNumber: '', expiry: '', cvv: '', cardName: '',
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const handleSubmit = (e) => { e.preventDefault(); nextStep(); };

  const stepLabels = ['Personal Details', 'Payment', 'Confirmed'];

  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Banner */}
      <div style={{ position: 'relative', height: 'clamp(180px, 30vw, 320px)', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&q=80&w=2070"
          alt="Book your stay"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(15,17,21,0.5), rgba(15,17,21,0.92))' }} />
        <div style={{ position: 'absolute', bottom: '2rem', left: 0, right: 0, textAlign: 'center' }}>
          <h4 className="text-primary font-semibold tracking-widest uppercase mb-2" style={{ fontSize: '0.75rem' }}>Reservation</h4>
          <h1 className="font-serif font-bold text-white" style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)' }}>Secure Your Stay</h1>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '800px', paddingTop: '4rem' }}>
        {/* Progress Steps */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '3rem', gap: '0' }}>
          {stepLabels.map((label, i) => {
            const num = i + 1;
            const isActive = step >= num;
            const isDone = step > num;
            return (
              <React.Fragment key={num}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `2px solid ${isActive ? 'var(--primary)' : 'rgba(255,255,255,0.15)'}`,
                    background: isActive ? 'var(--primary)' : 'transparent',
                    color: isActive ? 'var(--bg-dark)' : 'var(--text-secondary)',
                    fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.4s ease',
                  }}>
                    {isDone ? <CheckCircle size={20} /> : num}
                  </div>
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: isActive ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: 600, whiteSpace: 'nowrap' }}>{label}</span>
                </div>
                {i < stepLabels.length - 1 && (
                  <div style={{ flex: 1, height: '2px', background: step > num + 1 ? 'var(--primary)' : 'rgba(255,255,255,0.1)', margin: '0 0.5rem', marginBottom: '1.5rem', transition: 'background 0.4s ease' }} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Form Card */}
        <div className="glass" style={{ borderRadius: '1rem', padding: 'clamp(1.5rem, 5vw, 3rem)', position: 'relative', overflow: 'hidden' }}>
          {/* Background shield icon */}
          <div style={{ position: 'absolute', top: '-1rem', right: '-1rem', opacity: 0.05, pointerEvents: 'none' }}>
            <ShieldCheck size={160} color="var(--primary)" />
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Details */}
            {step === 1 && (
              <div>
                <h3 className="font-serif font-bold text-white mb-6" style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>Personal Details</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                  <div>
                    <label>Full Name</label>
                    <div style={{ position: 'relative' }}>
                      <User size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                      <input type="text" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} style={{ paddingLeft: '2.5rem' }} />
                    </div>
                  </div>
                  <div>
                    <label>Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                      <input type="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} style={{ paddingLeft: '2.5rem' }} />
                    </div>
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                      <input type="tel" name="phone" required placeholder="+1 (234) 567-890" value={formData.phone} onChange={handleChange} style={{ paddingLeft: '2.5rem' }} />
                    </div>
                  </div>
                  <div>
                    <label>Room Type</label>
                    <select name="roomType" value={formData.roomType} onChange={handleChange}>
                      <option value="Deluxe Suite">Deluxe Suite — $450/night</option>
                      <option value="Presidential Suite">Presidential Suite — $1,200/night</option>
                      <option value="Ocean View Room">Ocean View Room — $650/night</option>
                      <option value="Family Garden Suite">Family Garden Suite — $550/night</option>
                      <option value="Junior Suite">Junior Suite — $300/night</option>
                      <option value="Honeymoon Loft">Honeymoon Loft — $800/night</option>
                    </select>
                  </div>
                  <div>
                    <label>Check-In Date</label>
                    <input type="date" name="checkIn" required value={formData.checkIn} onChange={handleChange} />
                  </div>
                  <div>
                    <label>Check-Out Date</label>
                    <input type="date" name="checkOut" required value={formData.checkOut} onChange={handleChange} />
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                  <button type="button" onClick={nextStep} className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    Continue to Payment <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div>
                <h3 className="font-serif font-bold text-white mb-6" style={{ fontSize: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '1rem' }}>Payment Gateway</h3>

                {/* Secure banner */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(201,160,80,0.07)', border: '1px solid rgba(201,160,80,0.2)', borderRadius: '0.75rem', padding: '1rem 1.25rem', marginBottom: '2rem' }}>
                  <Lock size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
                  <div>
                    <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Secure Payment</p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Your payment information is encrypted and securely processed.</p>
                  </div>
                </div>

                {/* Booking Summary */}
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem', fontWeight: 600 }}>Booking Summary</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.95rem' }}>
                    <span className="text-text-secondary">Room:</span>
                    <span style={{ fontWeight: 600 }}>{formData.roomType}</span>
                  </div>
                  {formData.checkIn && formData.checkOut && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.95rem', marginTop: '0.4rem' }}>
                      <span className="text-text-secondary">Dates:</span>
                      <span style={{ fontWeight: 600 }}>{formData.checkIn} → {formData.checkOut}</span>
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
                  <div>
                    <label>Cardholder Name</label>
                    <div style={{ position: 'relative' }}>
                      <User size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                      <input type="text" name="cardName" required placeholder="John Doe" value={formData.cardName} onChange={handleChange} style={{ paddingLeft: '2.5rem' }} />
                    </div>
                  </div>
                  <div>
                    <label>Card Number</label>
                    <div style={{ position: 'relative' }}>
                      <CreditCard size={16} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--primary)' }} />
                      <input type="text" name="cardNumber" required placeholder="**** **** **** ****" value={formData.cardNumber} onChange={handleChange} maxLength={19} style={{ paddingLeft: '2.5rem' }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label>Expiry Date</label>
                      <input type="text" name="expiry" required placeholder="MM/YY" value={formData.expiry} onChange={handleChange} maxLength={5} />
                    </div>
                    <div>
                      <label>CVV</label>
                      <input type="password" name="cvv" required placeholder="•••" value={formData.cvv} onChange={handleChange} maxLength={3} />
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <button type="button" onClick={prevStep} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.85rem', transition: 'color 0.3s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    <ArrowLeft size={16} /> Back
                  </button>
                  <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Lock size={16} /> Pay & Confirm Booking
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Confirmed */}
            {step === 3 && (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '90px', height: '90px', background: 'rgba(201,160,80,0.1)', border: '2px solid rgba(201,160,80,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', color: 'var(--primary)', animation: 'fadeInUp 0.6s ease-out' }}>
                  <CheckCircle size={52} />
                </div>
                <h3 className="font-serif font-bold text-white mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>Reservation Confirmed!</h3>
                <p className="text-text-secondary mb-8" style={{ maxWidth: '440px', margin: '0 auto 2rem', fontSize: '1rem' }}>
                  Thank you, <strong style={{ color: 'white' }}>{formData.name}</strong>. Your booking for the <strong style={{ color: 'var(--primary)' }}>{formData.roomType}</strong> has been confirmed. A confirmation email has been sent to <strong style={{ color: 'white' }}>{formData.email}</strong>.
                </p>

                {/* Receipt */}
                <div className="glass" style={{ borderRadius: '0.75rem', padding: '1.75rem', maxWidth: '360px', margin: '0 auto 2.5rem', textAlign: 'left' }}>
                  <p style={{ color: 'var(--primary)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: '1rem' }}>Booking Details</p>
                  {[
                    ['Guest', formData.name],
                    ['Room', formData.roomType],
                    ...(formData.checkIn ? [['Check-in', formData.checkIn]] : []),
                    ...(formData.checkOut ? [['Check-out', formData.checkOut]] : []),
                    ['Status', 'PAID'],
                  ].map(([key, val]) => (
                    <div key={key} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.9rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem' }}>
                      <span className="text-text-secondary">{key}:</span>
                      <span style={{ color: key === 'Status' ? '#4ade80' : 'white', fontWeight: 600 }}>{val}</span>
                    </div>
                  ))}
                </div>

                <button type="button" onClick={() => window.location.href = '/'} className="btn-primary">
                  Return To Home
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
