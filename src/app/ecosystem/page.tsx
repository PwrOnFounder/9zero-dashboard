import { ECOSYSTEM_NODES, ECOSYSTEM_LINKS } from '@/lib/data';
import EcosystemGraph from '@/components/charts/EcosystemGraph';

const LEGEND = [
  { key: 'hub', label: '9Zero Hub', color: '#2DD4BF' },
  { key: 'startup', label: 'Startups', color: '#4ade80' },
  { key: 'fund', label: 'Investors/Funds', color: '#fbbf24' },
  { key: 'institution', label: 'Institutions', color: '#a78bfa' },
  { key: 'government', label: 'Government', color: '#60a5fa' },
  { key: 'event', label: 'Events', color: '#f472b6' },
];

export default function EcosystemPage() {
  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Ecosystem Network</div>
          <div className="section-subtitle">Interactive map of the Seattle Climate Innovation Hub ecosystem</div>
        </div>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <EcosystemGraph nodes={ECOSYSTEM_NODES} links={ECOSYSTEM_LINKS} />
      </div>

      <div className="card-grid">
        {LEGEND.map((g) => (
          <div key={g.key} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-xs)' }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: g.color, flexShrink: 0 }} />
            <span>{g.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
