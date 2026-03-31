'use client';

import { useState } from 'react';
import { RFPS } from '@/lib/data';

export default function RfpsPage() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = RFPS.filter((r) => {
    if (search && !(r.name + r.org).toLowerCase().includes(search.toLowerCase())) return false;
    if (status && r.status !== status) return false;
    return true;
  });

  const badgeClass: Record<string, string> = {
    Open: 'badge-open', Upcoming: 'badge-coming', 'Design Phase': 'badge-coming', Closed: 'badge-closed',
  };

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">RFP &amp; Procurement Tracker</div>
          <div className="section-subtitle">Seattle-area clean energy procurement opportunities</div>
        </div>
      </div>

      <div className="table-wrap">
        <div className="table-toolbar">
          <input
            type="search"
            placeholder="Search RFPs..."
            style={{ flex: 1, minWidth: 200 }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="">All Status</option>
            {['Open', 'Upcoming', 'Design Phase', 'Closed'].map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr><th>Opportunity</th><th>Organization</th><th>Est. Value</th><th>Deadline</th><th>Status</th><th>Best For</th></tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.name}>
                  <td><a href={r.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>{r.name}</a></td>
                  <td style={{ whiteSpace: 'nowrap' }}>{r.org}</td>
                  <td style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{r.value}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{r.deadline}</td>
                  <td><span className={`badge ${badgeClass[r.status] ?? 'badge-closed'}`}>{r.status}</span></td>
                  <td style={{ fontSize: 'var(--text-xs)' }}>
                    {r.sectors.map((s) => <span key={s} className="badge badge-sector" style={{ marginRight: 2 }}>{s}</span>)}
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
