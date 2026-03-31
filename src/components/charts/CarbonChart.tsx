'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface CarbonChartProps {
  annualCO2: number;
  years: number;
}

export default function CarbonChart({ annualCO2, years }: CarbonChartProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#6e9484' : '#5a7066';

    const labels = Array.from({ length: years }, (_, i) => `Year ${i + 1}`);
    const data = labels.map((_, i) => annualCO2 * (1 + i * 0.01));

    chartRef.current?.destroy();
    chartRef.current = new Chart(ref.current, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Annual CO₂ Reduction (tCO₂)',
          data,
          backgroundColor: 'rgba(45,212,191,0.4)',
          borderColor: 'rgba(45,212,191,1)',
          borderWidth: 1,
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(128,128,128,0.1)' }, ticks: { color: textColor, font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { color: textColor, font: { size: 9 }, maxTicksLimit: 10 } },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, [annualCO2, years]);

  return <canvas ref={ref} />;
}
