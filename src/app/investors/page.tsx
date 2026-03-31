'use client';

import { useState } from 'react';
import { INVESTORS } from '@/lib/data';

export default function InvestorsPage() {
  const [typeFilter, setTypeFilter] = useState('all');
  const types = [...new Set(INVESTORS.map((i) => i.type))];
  const filtered = typeFilter === 'all' ? INVESTORS : INVESTORS.filter((i) => i.type === typeFilter);

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Investor Explorer</div>
          <div className="section-subtitle">26 climate-focused investors profiled · Angels, VCs, CVCs, Government, Nonprofits · $10B+ combined AUM</div>
        </div>
      </div>

      <div className="filter-bar">
        <button className={`chip${typeFilter === 'all' ? ' active' : ''}`} onClick={() => setTypeFilter('all')}>
          All ({INVESTORS.length})
        </button>
        {types.map((t) => (
          <button key={t} className={`chip${typeFilter === t ? ' active' : ''}`} onClick={() => setTypeFilter(t)}>
            {t} ({INVESTORS.filter((i) => i.type === t).length})
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filtered.map((inv) => (
          <div key={inv.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>
                  <a href={inv.url} target="_blank" rel="noopener noreferrer">{inv.name}</a>
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{inv.type} · {inv.hq}</div>
              </div>
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}><strong>Focus:</strong> {inv.focus}</div>
            <div style={{ display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--text-xs)' }}>
              <div><span style={{ color: 'var(--color-text-faint)' }}>Check:</span> <strong>{inv.check}</strong></div>
              <div><span style={{ color: 'var(--color-text-faint)' }}>AUM:</span> <strong>{inv.aum}</strong></div>
            </div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-accent-text)', fontWeight: 500 }}>{inv.connection}</div>
            <div style={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {inv.sectors.map((s) => <span key={s} className="badge badge-sector">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
