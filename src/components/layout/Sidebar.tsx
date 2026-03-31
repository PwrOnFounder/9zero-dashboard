'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const NAV_SECTIONS = [
  {
    label: 'Overview',
    items: [
      { href: '/', label: 'Dashboard', badge: null, icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
      )},
    ],
  },
  {
    label: 'Intelligence',
    items: [
      { href: '/grants', label: 'Grant Matchmaker', badge: '15', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/>
        </svg>
      )},
      { href: '/rfps', label: 'RFP Tracker', badge: '8', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/>
          <path d="M14 2v6h6"/>
        </svg>
      )},
      { href: '/policy', label: 'Policy Tracker', badge: null, icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      )},
      { href: '/investors', label: 'Investor Explorer', badge: '26', icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 20h20"/><path d="M5 20V10l7-7 7 7v10"/>
        </svg>
      )},
    ],
  },
  {
    label: 'Community',
    items: [
      { href: '/members', label: 'Members', badge: null, icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )},
      { href: '/events', label: 'Events', badge: null, icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      )},
      { href: '/ecosystem', label: 'Ecosystem Map', badge: null, icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/>
          <circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
          <line x1="7" y1="7" x2="10" y2="10"/><line x1="14" y1="10" x2="17" y2="7"/>
          <line x1="7" y1="17" x2="10" y2="14"/><line x1="14" y1="14" x2="17" y2="17"/>
        </svg>
      )},
    ],
  },
  {
    label: 'Tools',
    items: [
      { href: '/calculator', label: 'Carbon Calculator', badge: null, icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v3m6.36-.64-2.12 2.12M21 12h-3M18.36 18.36l-2.12-2.12M12 21v-3M5.64 18.36l2.12-2.12M3 12h3M5.64 5.64l2.12 2.12"/>
        </svg>
      )},
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Expose open/close to window for Header hamburger
  if (typeof window !== 'undefined') {
    (window as any).__openSidebar = () => setIsOpen(true);
    (window as any).__closeSidebar = () => setIsOpen(false);
  }

  function handleSearch(e: React.KeyboardEvent<HTMLInputElement>) {
    const q = (e.target as HTMLInputElement).value.toLowerCase();
    if (!q) return;
    if (q.includes('grant') || q.includes('fund')) router.push('/grants');
    else if (q.includes('rfp') || q.includes('procur')) router.push('/rfps');
    else if (q.includes('polic') || q.includes('beps') || q.includes('bill')) router.push('/policy');
    else if (q.includes('invest') || q.includes('vc') || q.includes('angel')) router.push('/investors');
    else if (q.includes('member') || q.includes('company') || q.includes('startup')) router.push('/members');
    else if (q.includes('event') || q.includes('calendar') || q.includes('pnw')) router.push('/events');
    else if (q.includes('eco') || q.includes('map') || q.includes('network')) router.push('/ecosystem');
    else if (q.includes('carbon') || q.includes('calc') || q.includes('co2')) router.push('/calculator');
  }

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`sidebar-overlay${isOpen ? ' open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`sidebar${isOpen ? ' open' : ''}`} id="sidebar">
        {/* Brand */}
        <div className="sidebar-brand">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" stroke="#2DD4BF" strokeWidth="2.5"/>
            <path d="M16 6 L16 16 L24 20" stroke="#2DD4BF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="16" r="3" fill="#2DD4BF"/>
          </svg>
          <div className="sidebar-brand-text">
            <div className="logo-text">9Zero Hub</div>
            <div className="logo-sub">Climate Intelligence</div>
          </div>
        </div>

        {/* Search */}
        <div className="sidebar-search">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="search"
            placeholder="Search everything..."
            autoComplete="off"
            onKeyUp={handleSearch}
          />
        </div>

        {/* Nav */}
        <nav className="sidebar-nav">
          {NAV_SECTIONS.map((section) => (
            <div key={section.label}>
              <div className="nav-section-label">{section.label}</div>
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`nav-item${isActive ? ' active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.icon}
                    {item.label}
                    {item.badge && <span className="nav-badge">{item.badge}</span>}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="sidebar-footer">
          <strong>9Zero Seattle Climate Innovation Hub</strong><br />
          Seattle Financial Center, Downtown<br />
          250+ Local Members · 800+ National<br />
          <span style={{ opacity: 0.6 }}>Data updated March 31, 2026</span>
        </div>
      </aside>
    </>
  );
}
