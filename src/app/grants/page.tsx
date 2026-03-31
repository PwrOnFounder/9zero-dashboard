'use client';

import { useState } from 'react';
import { GRANTS } from '@/lib/data';

export default function GrantsPage() {
  const [search, setSearch] = useState('');
  const [sector, setSector] = useState('');
  const [status, setStatus] = useState('');

  const filtered = GRANTS
    .filter((g) => {
      if (search && !(g.name + g.funder + g.sectors.join(' ')).toLowerCase().includes(search.toLowerCase())) return false;
      if (sector && !g.sectors.includes(sector)) return false;
      if (status && g.status !== status) return false;
      return true;
    })
    .sort((a, b) => b.match - a.match);

  const badgeClass: Record<string, string> = {
    Open: 'badge-open', Rolling: 'badge-coming', Monitoring: 'badge-coming', Closed: 'badge-closed',
  };

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Grant Matchmaker</div>
          <div className="section-subtitle">Filter by sector, stage, and amount to find your best-fit grants</div>
        </div>
      </div>

      <div className="table-wrap">
        <div className="table-toolbar">
          <input
            type="search"
            placeholder="Search grants..."
            style={{ flex: 1, minWidth: 200 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={sector} onChange={(e) => setSector(e.target.value)}>
            <option value="">All Sectors</option>
            {['Energy', 'Hardware', 'Software', 'Materials', 'EV'].map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Status</option>
            {['Open', 'Rolling', 'Monitoring', 'Closed'].map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr><th>Program</th><th>Funder</th><th>Amount</th><th>Deadline</th><th>Status</th><th>Best For</th><th>Match</th></tr>
            </thead>
            <tbody>
              {filtered.map((g) => (
                <tr key={g.name}>
                  <td><a href={g.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>{g.name}</a></td>
                  <td style={{ whiteSpace: 'nowrap' }}>{g.funder}</td>
                  <td style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{g.amount}</td>
                  <td style={{ whiteSpace: 'nowrap', fontSize: 'var(--text-xs)' }}>{g.deadline}</td>
                  <td><span className={`badge ${badgeClass[g.status] ?? 'badge-closed'}`}>{g.status}</span></td>
                  <td style={{ fontSize: 'var(--text-xs)' }}>
                    {g.sectors.map((s) => <span key={s} className="badge badge-sector" style={{ marginRight: 2 }}>{s}</span>)}
                  </td>
                  <td>
                    <div className="score-bar">
                      <div className="score-fill-bg"><div className="score-fill" style={{ width: `${g.match}%` }} /></div>
                      <span className="score-num">{g.match}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
