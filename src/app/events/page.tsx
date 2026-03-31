import { EVENTS } from '@/lib/data';
import { formatDate } from '@/lib/utils';

const TYPE_COLORS: Record<string, string> = {
  deadline: 'var(--color-error)',
  event: 'var(--color-accent-bright)',
  milestone: 'var(--color-success)',
  compliance: 'var(--color-warning)',
};

const TYPE_LABELS: Record<string, string> = {
  deadline: 'Deadline', event: 'Event', milestone: 'Milestone', compliance: 'Compliance',
};

export default function EventsPage() {
  const now = new Date();
  const sorted = [...EVENTS].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Events Calendar</div>
          <div className="section-subtitle">Upcoming climate tech events in the Pacific Northwest</div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
        {sorted.map((e) => {
          const d = new Date(e.date);
          const diff = Math.ceil((d.getTime() - now.getTime()) / 86400000);
          const isPast = diff < 0;
          const color = TYPE_COLORS[e.type] || 'var(--color-accent)';

          return (
            <div key={e.name} className="card" style={{ opacity: isPast ? 0.5 : 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>
                    <a href={e.url} target="_blank" rel="noopener noreferrer">{e.name}</a>
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                    {formatDate(d, { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })} · {e.location}
                  </div>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>{e.desc}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span className="badge" style={{ background: `${color}20`, color }}>{TYPE_LABELS[e.type]}</span>
                  <div style={{
                    fontSize: 'var(--text-sm)', fontWeight: 800, marginTop: 'var(--space-2)',
                    color: isPast ? 'var(--color-text-faint)' : diff <= 7 ? 'var(--color-error)' : diff <= 30 ? 'var(--color-warning)' : 'var(--color-accent-text)',
                  }}>
                    {isPast ? 'Past' : `${diff} days`}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
