'use client';

import { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export function FundingPipelineChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#6e9484' : '#5a7066';

    chartRef.current?.destroy();
    chartRef.current = new Chart(ref.current, {
      type: 'doughnut',
      data: {
        labels: ['Open', 'Rolling', 'Monitoring', 'Closed'],
        datasets: [{ data: [7, 3, 2, 3], backgroundColor: ['#4ade80', '#fbbf24', '#60a5fa', '#6b7280'], borderWidth: 0 }],
      },
      options: {
        responsive: true, maintainAspectRatio: false, cutout: '65%',
        plugins: { legend: { position: 'bottom', labels: { color: textColor, font: { size: 11 }, padding: 16, usePointStyle: true } } },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, []);

  return (
    <div className="chart-card">
      <div className="chart-title">Funding Pipeline by Status</div>
      <div className="chart-container"><canvas ref={ref} /></div>
    </div>
  );
}

export function SectorChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#6e9484' : '#5a7066';

    chartRef.current?.destroy();
    chartRef.current = new Chart(ref.current, {
      type: 'bar',
      data: {
        labels: ['Nuclear/Fusion', 'Batteries', 'Carbon/Clean', 'EV/Mobility', 'Solar/Wind', 'Software'],
        datasets: [{
          label: 'Investment ($M)',
          data: [1075, 430, 23, 31, 50, 20],
          backgroundColor: ['#2DD4BF', '#5eead4', '#4ade80', '#fbbf24', '#a78bfa', '#60a5fa'],
          borderRadius: 6, borderWidth: 0,
        }],
      },
      options: {
        responsive: true, maintainAspectRatio: false, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: 'rgba(128,128,128,0.1)' }, ticks: { color: textColor, font: { size: 10 } } },
          y: { grid: { display: false }, ticks: { color: textColor, font: { size: 10 } } },
        },
      },
    });
    return () => { chartRef.current?.destroy(); };
  }, []);

  return (
    <div className="chart-card">
      <div className="chart-title">Investment by Sector (PNW 2025)</div>
      <div className="chart-container"><canvas ref={ref} /></div>
    </div>
  );
}
