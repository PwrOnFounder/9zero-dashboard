import { GRANTS, RFPS, EVENTS } from '@/lib/data';
import { parseDeadlineDate, daysUntil, formatDate } from '@/lib/utils';
import { FundingPipelineChart, SectorChart } from '@/components/charts/DashboardCharts';
import PNWCountdown from '@/components/PNWCountdown';

function getUrgentDeadlines() {
  const now = new Date();
  return [...RFPS.filter((r) => r.status === 'Open'), ...GRANTS.filter((g) => g.status === 'Open')]
    .map((item) => {
      const dl = 'org' in item ? item.deadline : item.deadline;
      const d = parseDeadlineDate(dl);
      const daysLeft = d ? daysUntil(d) : null;
      return { ...item, daysLeft, orgOrFunder: 'org' in item ? item.org : item.funder };
    })
    .filter((item) => item.daysLeft !== null && item.daysLeft > 0)
    .sort((a, b) => (a.daysLeft ?? 999) - (b.daysLeft ?? 999))
    .slice(0, 6);
}

function getUpcomingEvents() {
  const now = new Date();
  return EVENTS.filter((e) => new Date(e.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4);
}

function daysUntilPNW() {
  const target = new Date('2026-07-13T00:00:00');
  return Math.floor((target.getTime() - Date.now()) / 86400000);
}

const TYPE_COLORS: Record<string, string> = {
  deadline: 'var(--color-error)',
  event: 'var(--color-accent-bright)',
  milestone: 'var(--color-success)',
  compliance: 'var(--color-warning)',
};

export default function DashboardPage() {
  const urgent = getUrgentDeadlines();
  const upcoming = getUpcomingEvents();
  const pnwDays = daysUntilPNW();

  return (
    <div className="page-content">
      {/* KPI Grid */}
      <div className="kpi-grid">
        <div className="kpi-card">
          <div className="kpi-label">WA Clean Energy Jobs</div>
          <div className="kpi-value accent">83,142</div>
          <div className="kpi-sub">E2 2025 Report · +46K projected by 2032</div>
          <div className="kpi-delta up">▲ 4.2% YoY</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">PNW Climate VC (2025)</div>
          <div className="kpi-value">$2B+</div>
          <div className="kpi-sub">40% of all PNW venture capital</div>
          <div className="kpi-delta up">▲ Record year</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">WA EV Market Share</div>
          <div className="kpi-value accent">21.3%</div>
          <div className="kpi-sub">Q4 2024 · 3rd nationally</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Hub Members Tracked</div>
          <div className="kpi-value">35</div>
          <div className="kpi-sub">Startups, funds, partners in database</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Events Tracked</div>
          <div className="kpi-value">17</div>
          <div className="kpi-sub">Deadlines, conferences, milestones</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Investors Profiled</div>
          <div className="kpi-value accent">26</div>
          <div className="kpi-sub">$10B+ combined AUM</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Open Grants</div>
          <div className="kpi-value">15</div>
          <div className="kpi-sub">$400B+ in active programs</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">PNW Climate Week</div>
          <div className="kpi-value" style={{ color: 'var(--color-warning)' }}>{pnwDays}d</div>
          <div className="kpi-sub">July 13–19, 2026</div>
        </div>
      </div>

      {/* Charts */}
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
        <FundingPipelineChart />
        <SectorChart />
      </div>

      {/* Scorecard + Key Signals */}
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
        <div className="card">
          <div className="section-title" style={{ marginBottom: 'var(--space-3)' }}>2026 Session Scorecard</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            {[
              { id: 'SB 6355', name: 'Transmission Authority', badge: 'Passed', badgeClass: 'badge-open', dot: 'var(--color-success)' },
              { id: 'SB 5982', name: 'CETA Data Center Fix', badge: 'Passed', badgeClass: 'badge-open', dot: 'var(--color-success)' },
              { id: 'HB 1903', name: 'Energy Assistance', badge: 'Awaiting Sig.', badgeClass: 'badge-coming', dot: 'var(--color-success)' },
              { id: 'HB 2515', name: 'Data Center Energy', badge: 'Failed', badgeClass: 'badge-closed', dot: 'var(--color-error)' },
              { id: 'Budget', name: '$540M CCA diversion', badge: 'Watch', badgeClass: 'badge-urgent', dot: 'var(--color-warning)' },
            ].map((item) => (
              <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                <strong>{item.id}</strong>
                <span style={{ color: 'var(--color-text-muted)' }}>{item.name}</span>
                <span className={`badge ${item.badgeClass}`} style={{ marginLeft: 'auto' }}>{item.badge}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="section-title" style={{ marginBottom: 'var(--space-3)' }}>Key Signals</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
            {[
              { accent: 'var(--color-accent-bright)', label: 'CCA Q1 Auction:', text: '$65.26/allowance, 13th consecutive sold-out. Cumulative revenue $4.72B.' },
              { accent: 'var(--color-warning)', label: 'IRA Credits Ended:', text: 'Residential solar, EV, energy efficiency credits expired Dec 31, 2025. Battery storage & commercial credits remain.' },
              { accent: 'var(--color-success)', label: 'WA-CA-QC Linkage:', text: 'Draft carbon market linkage agreement open for public comment through May 1. Potential 2027 launch.' },
              { accent: 'var(--color-accent)', label: 'Seattle GHG:', text: '2.9M mtCO₂e (2022). BEPS targets published Jan 2026.' },
            ].map((s) => (
              <div key={s.label} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', paddingLeft: 'var(--space-3)', borderLeft: `3px solid ${s.accent}` }}>
                <strong style={{ color: 'var(--color-text)' }}>{s.label}</strong> {s.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Urgent Deadlines */}
      <div>
        <div className="section-header" style={{ marginBottom: 'var(--space-3)' }}>
          <div className="section-title">🔥 Urgent Deadlines</div>
        </div>
        <div className="table-wrap">
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Opportunity</th><th>Organization</th><th>Deadline</th>
                  <th>Value</th><th>Status</th><th>Days Left</th>
                </tr>
              </thead>
              <tbody>
                {urgent.map((d, i) => (
                  <tr key={i}>
                    <td>
                      <a href={'url' in d ? d.url : '#'} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                        {d.name}
                      </a>
                    </td>
                    <td>{d.orgOrFunder}</td>
                    <td style={{ whiteSpace: 'nowrap' }}>{d.deadline}</td>
                    <td>{'value' in d ? d.value : ('amount' in d ? d.amount : '')}</td>
                    <td><span className="badge badge-open">Open</span></td>
                    <td style={{
                      fontWeight: 700,
                      color: (d.daysLeft ?? 99) <= 7 ? 'var(--color-error)' : (d.daysLeft ?? 99) <= 30 ? 'var(--color-warning)' : 'var(--color-success)',
                    }}>{d.daysLeft}d</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Events + Countdown */}
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
        <div className="card">
          <div className="section-title" style={{ marginBottom: 'var(--space-4)' }}>Upcoming Events</div>
          {upcoming.map((e) => {
            const d = new Date(e.date);
            const diff = Math.ceil((d.getTime() - Date.now()) / 86400000);
            return (
              <div key={e.name} style={{ display: 'flex', gap: 'var(--space-3)', padding: 'var(--space-3) 0', borderBottom: '1px solid var(--color-divider)' }}>
                <div style={{ width: 4, borderRadius: 2, background: TYPE_COLORS[e.type] || 'var(--color-accent)', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600 }}>
                    <a href={e.url} target="_blank" rel="noopener noreferrer">{e.name}</a>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                    {formatDate(d)} · {e.location}
                  </div>
                </div>
                <div style={{
                  fontSize: 'var(--text-xs)', fontWeight: 700, whiteSpace: 'nowrap',
                  color: diff <= 7 ? 'var(--color-error)' : diff <= 30 ? 'var(--color-warning)' : 'var(--color-text-faint)',
                }}>{diff}d</div>
              </div>
            );
          })}
        </div>

        <div className="card">
          <div className="section-title" style={{ marginBottom: 'var(--space-4)' }}>PNW Climate Week 2026 Countdown</div>
          <PNWCountdown />
          <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
            July 13–19 · 10+ cities · 220+ events expected<br />
            <a href="https://pnwclimateweek.org" target="_blank" rel="noopener noreferrer">pnwclimateweek.org →</a>
          </p>
        </div>
      </div>
    </div>
  );
}
