// ================================================================
// UTILITY FUNCTIONS
// ================================================================

export function parseDeadlineDate(str: string): Date | null {
  if (!str) return null;
  const m = str.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d+),?\s*(\d{4})/i);
  if (m) return new Date(`${m[1]} ${m[2]}, ${m[3]}`);
  const m2 = str.match(/(\d{4})-(\d{2})-(\d{2})/);
  if (m2) return new Date(m2[0]);
  return null;
}

export function daysUntil(date: Date): number {
  const now = new Date();
  return Math.ceil((date.getTime() - now.getTime()) / 86400000);
}

export function formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string {
  return date.toLocaleDateString('en-US', options ?? { month: 'short', day: 'numeric', year: 'numeric' });
}
