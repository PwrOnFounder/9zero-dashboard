'use client';

import { useEffect, useState } from 'react';

const PNW_TARGET = new Date('2026-07-13T00:00:00');

export default function PNWCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, mins: 0, done: false });

  useEffect(() => {
    const tick = () => {
      const diff = PNW_TARGET.getTime() - Date.now();
      if (diff <= 0) { setTime({ days: 0, hours: 0, mins: 0, done: true }); return; }
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        done: false,
      });
    };
    tick();
    const id = setInterval(tick, 60000);
    return () => clearInterval(id);
  }, []);

  if (time.done) {
    return <span style={{ color: 'var(--color-accent-bright)', fontWeight: 700 }}>Happening Now!</span>;
  }

  return (
    <div className="countdown">
      {[{ num: time.days, label: 'Days' }, { num: time.hours, label: 'Hours' }, { num: time.mins, label: 'Min' }].map(({ num, label }) => (
        <div key={label} className="countdown-unit">
          <div className="countdown-num">{num}</div>
          <div className="countdown-label">{label}</div>
        </div>
      ))}
    </div>
  );
}
