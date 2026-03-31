import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import ThemeProvider from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: '9Zero Hub — Climate Innovation Dashboard',
  description: 'Live intelligence dashboard for the 9Zero Seattle Climate Innovation Hub — grants, RFPs, policy, investors, events, and ecosystem mapping for Pacific Northwest climate tech.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <ThemeProvider>
          <div className="app">
            <Sidebar />
            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', gridColumn: 2 }}>
              <Header />
              <main className="main" id="main-content">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
