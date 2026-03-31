'use client';

import { useState } from 'react';
import { MEMBERS } from '@/lib/data';

const SECTORS = ['All', 'Energy', 'Software', 'Hardware', 'Materials', 'Mobility', 'Incubator', 'Fund'];

export default function MembersPage() {
  const [sector, setSector] = useState('All');

  const filtered = sector === 'All' ? MEMBERS : MEMBERS.filter((m) => m.sector === sector);

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Member Directory</div>
          <div className="section-subtitle">9Zero Seattle Climate Innovation Hub ecosystem</div>
        </div>
      </div>

      <div className="filter-bar">
        {SECTORS.map((s) => (
          <button key={s} className={`chip${sector === s ? ' active' : ''}`} onClick={() => setSector(s)}>
            {s}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((m) => (
          <div key={m.name} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--space-2)' }}>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>
                {m.url && m.url !== '#'
                  ? <a href={m.url} target="_blank" rel="noopener noreferrer">{m.name}</a>
                  : m.name}
              </div>
              <span className="badge badge-sector">{m.sector}</span>
            </div>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{m.desc}</p>
            {m.founder && (
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', marginTop: 'var(--space-2)' }}>
                Founded by {m.founder}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
