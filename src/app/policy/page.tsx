'use client';

import { useState } from 'react';
import { BILLS } from '@/lib/data';

const BEPS_TIMELINE = [
  { date: 'Jan 2026', title: 'GHGI Targets Published', desc: 'Director\'s Rule finalized with emissions factors for 21 building types', filled: true },
  { date: 'Oct 2027', title: 'First Reporting — >220K SF buildings', desc: '~largest buildings begin GHG benchmarking verification', filled: false },
  { date: 'Oct 2028', title: 'Reporting — 50K-90K SF buildings', desc: 'Mid-size buildings begin reporting', filled: false },
  { date: 'Oct 2030', title: 'Reporting — 20K-30K SF buildings', desc: 'Smallest covered buildings begin reporting', filled: false },
  { date: 'Oct 2031', title: 'First Emissions Targets', desc: 'Largest buildings must meet first GHGI targets or face penalties', filled: false, warning: true },
  { date: '2041-2050', title: 'Net-Zero Deadline', desc: 'All covered buildings must achieve net-zero emissions', filled: false, error: true },
];

function billStatusBadge(s: string) {
  if (s.startsWith('Passed')) return 'badge-open';
  if (s === 'Failed' || s === 'Dead') return 'badge-closed';
  return 'badge-coming';
}

function billBorderColor(s: string) {
  if (s.startsWith('Passed')) return 'var(--color-success)';
  if (s === 'Failed' || s === 'Dead') return 'var(--color-error)';
  if (s === 'Stalled') return 'var(--color-warning)';
  return 'var(--color-accent-bright)';
}

export default function PolicyPage() {
  const [tab, setTab] = useState<'beps' | 'cca' | 'bills' | 'federal'>('beps');

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Policy Tracker</div>
          <div className="section-subtitle">WA State legislation, Seattle BEPS, and federal policy impacting climate tech</div>
        </div>
      </div>

      <div className="tab-bar">
        {([['beps', 'Seattle BEPS'], ['cca', 'WA Cap-and-Invest'], ['bills', '2026 Session Results'], ['federal', 'Federal']] as const).map(([id, label]) => (
          <button key={id} className={`tab-btn${tab === id ? ' active' : ''}`} onClick={() => setTab(id)}>{label}</button>
        ))}
      </div>

      {tab === 'beps' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--space-4)' }}>
              <div>
                <h3 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>Seattle Building Emissions Performance Standard</h3>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>~4,100 buildings affected · Signed Dec 13, 2023 · GHGI targets published Jan 2026</p>
              </div>
              <span className="badge badge-open">Active</span>
            </div>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>Compliance Timeline</h4>
            <div className="timeline">
              {BEPS_TIMELINE.map((item) => (
                <div key={item.title} className="timeline-item">
                  <div className={`timeline-dot${item.filled ? ' filled' : ''}${item.warning ? ' warning' : ''}${item.error ? ' error' : ''}`} />
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>Penalty Exposure</h4>
            <table className="data-table">
              <thead><tr><th>Building Type</th><th>Penalty (per SF / 5yr)</th><th>Example (100K SF)</th></tr></thead>
              <tbody>
                <tr><td>Nonresidential</td><td style={{ color: 'var(--color-error)', fontWeight: 600 }}>$10.00/SF</td><td>$1,000,000</td></tr>
                <tr><td>Multifamily</td><td style={{ color: 'var(--color-warning)', fontWeight: 600 }}>$7.50/SF</td><td>$750,000</td></tr>
                <tr><td>Low-income housing</td><td>$2.50/SF</td><td>$250,000</td></tr>
                <tr><td>Failure to report</td><td colSpan={2} style={{ color: 'var(--color-error)' }}>$15,000 flat fine</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'cca' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="kpi-grid">
            <div className="kpi-card"><div className="kpi-label">Q1 2026 Auction Price</div><div className="kpi-value accent">$65.26</div><div className="kpi-sub">per allowance · Mar 11, 2026</div></div>
            <div className="kpi-card"><div className="kpi-label">Q1 2026 Revenue</div><div className="kpi-value">$182.7M</div><div className="kpi-sub">13th consecutive sold-out auction</div></div>
            <div className="kpi-card"><div className="kpi-label">Cumulative Revenue</div><div className="kpi-value accent">$4.72B</div><div className="kpi-sub">since program inception</div></div>
            <div className="kpi-card"><div className="kpi-label">2026 Emissions Cap</div><div className="kpi-value">49M</div><div className="kpi-sub">metric tons CO₂e · 7%/yr decline</div></div>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-accent-bright)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>🔗 WA-CA-QC Carbon Market Linkage</h4>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Draft agreement for WA-California-Quebec carbon market linkage released for public comment. Comment deadline: <strong style={{ color: 'var(--color-warning)' }}>May 1, 2026</strong>. Potential launch: 2027. Would create the largest carbon market in North America.</p>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-warning)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>⚠️ CCA Budget Diversion</h4>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Legislature diverted ~$540M from CCA revenue to fill general fund budget gaps in the 2026 session. This reduces climate investment accounts and may affect future grant funding levels.</p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-3)' }}>CCA Investment Accounts</h4>
            <table className="data-table">
              <thead><tr><th>Account</th><th>Focus</th><th>Est. Annual</th></tr></thead>
              <tbody>
                <tr><td>Climate Transit Programs</td><td>Electric buses, transit electrification</td><td style={{ fontWeight: 600 }}>~$200M</td></tr>
                <tr><td>Climate Commitment</td><td>Clean energy, CETCAP, audits</td><td style={{ fontWeight: 600 }}>~$100M</td></tr>
                <tr><td>Natural Climate Solutions</td><td>Forests, natural lands</td><td style={{ fontWeight: 600 }}>~$100M</td></tr>
                <tr><td>Carbon Emissions Reduction</td><td>Clean transportation</td><td>Large</td></tr>
                <tr><td>Air Quality &amp; Health</td><td>Environmental justice</td><td>Moderate</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'bills' && (
        <div className="card-grid">
          {BILLS.map((b) => (
            <div key={b.id} className="card" style={{ borderLeft: `3px solid ${billBorderColor(b.status)}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--space-2)' }}>
                <span className="mono" style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--color-accent-text)' }}>{b.id}</span>
                <span className={`badge ${billStatusBadge(b.status)}`}>{b.status}</span>
              </div>
              <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>{b.name}</div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>{b.desc}</p>
              <div style={{ marginTop: 'var(--space-3)', display: 'flex', gap: 'var(--space-2)' }}>
                <span className="badge badge-sector">{b.category}</span>
                <span className="badge" style={{
                  background: b.impact === 'High' ? 'rgba(45,212,191,0.12)' : b.impact === 'Medium' ? 'rgba(251,191,36,0.12)' : 'rgba(120,120,120,0.12)',
                  color: b.impact === 'High' ? 'var(--color-accent-text)' : b.impact === 'Medium' ? 'var(--color-warning)' : 'var(--color-text-faint)',
                }}>{b.impact} Impact</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'federal' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="card" style={{ borderLeft: '3px solid var(--color-error)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>🚨 IRA Credits Ended (H.R.1 — Dec 31, 2025)</h4>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>Under H.R.1, the following IRA credits expired December 31, 2025:</p>
            <ul style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', paddingLeft: 'var(--space-4)', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li><strong>Residential Solar (Section 25D)</strong> — 30% residential clean energy credit ended</li>
              <li><strong>EV Tax Credit (Section 30D)</strong> — $7,500 new clean vehicle credit ended</li>
              <li><strong>Used EV Credit (Section 25E)</strong> — $4,000 used clean vehicle credit ended</li>
              <li><strong>Energy Efficiency (Section 25C)</strong> — Home energy audit &amp; weatherization credits ended</li>
            </ul>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-success)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>✅ IRA Credits Still Active</h4>
            <ul style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', paddingLeft: 'var(--space-4)', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li><strong>Battery Storage (Section 48E)</strong> — Standalone storage ITC remains intact</li>
              <li><strong>Geothermal Heat Pumps (Section 48)</strong> — Still eligible for 30% credit</li>
              <li><strong>Commercial Clean Energy (Section 48E/45Y)</strong> — Production &amp; investment credits continue</li>
              <li><strong>CETCAP Direct Pay</strong> — WA Commerce still processing IRA direct-pay elections</li>
            </ul>
          </div>
          <div className="card" style={{ borderLeft: '3px solid var(--color-warning)' }}>
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>⚠️ Additional Phase-Outs</h4>
            <ul style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', paddingLeft: 'var(--space-4)', listStyle: 'disc', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <li><strong>Section 45W</strong> (commercial vehicle credit) — Repealed for vehicles acquired after Sept 30, 2025</li>
              <li><strong>Section 30C</strong> (EV infrastructure credit) — Repealing June 30, 2026. Act now.</li>
            </ul>
          </div>
          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>DOE Renamed: Office of Energy Dominance Financing</h4>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>The DOE Loan Programs Office has been administratively renamed. $400B+ in loan guarantee authority remains active. Rolling applications at <a href="https://www.energy.gov/lpo" target="_blank" rel="noopener noreferrer">energy.gov/lpo</a>.</p>
          </div>
          <div className="card">
            <h4 style={{ fontSize: 'var(--text-sm)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>Governor Ferguson EO 25-11</h4>
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>Directs 7 cabinet agencies to prioritize clean energy permits. Creates Joint Clean Energy Acceleration Team. Orders UTC to expedite RFP reviews. Commerce to speed up grant awards for projects facing expiring tax credits.</p>
          </div>
        </div>
      )}
    </div>
  );
}
