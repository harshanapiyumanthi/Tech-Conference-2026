import React, { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate) - new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'Minutes', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'Seconds', value: String(timeLeft.seconds).padStart(2, '0') }
  ];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.9rem',
        flexWrap: 'wrap',
        margin: '2rem 0'
      }}
    >
      {units.map((unit, index) => (
        <div
          key={unit.label}
          style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid rgba(124, 58, 237, 0.3)',
            backdropFilter: 'blur(12px)',
            borderRadius: 'var(--radius-md)',
            padding: '1rem 1.4rem',
            minWidth: '92px',
            textAlign: 'center',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4), inset 0 0 15px rgba(124, 58, 237, 0.08)',
            position: 'relative'
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '2.2rem',
              fontWeight: '800',
              lineHeight: 1,
              color: '#ffffff',
              textShadow: '0 0 20px rgba(124, 58, 237, 0.6)'
            }}
          >
            {unit.value}
          </div>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--cyan-light)',
              marginTop: '0.4rem'
            }}
          >
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
