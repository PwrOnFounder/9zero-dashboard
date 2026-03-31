'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

const CarbonChart = dynamic(() => import('@/components/charts/CarbonChart'), { ssr: false });

const FACTORS: Record<string, Record<string, number>> = {
  solar: { seattle: 0.3, pse: 1.2, 'wa-avg': 0.8 },
  heatpump: { seattle: 1.5, pse: 2.8, 'wa-avg': 2.2 },
  'ev-fleet': { seattle: 4.2, pse: 5.8, 'wa-avg': 5.0 },
  'ev-charging': { seattle: 8, pse: 12, 'wa-avg': 10 },
  storage: { seattle: 0.5, pse: 1.8, 'wa-avg': 1.2 },
  weatherization: { seattle: 0.003, pse: 0.005, 'wa-avg': 0.004 },
};

export default function CalculatorPage() {
  const [type, setType] = useState('solar');
  const [scale, setScale] = useState(100);
  const [location, setLocation] = useState('seattle');
  const [years, setYears] = useState(25);

  const { annualCO2, totalCO2, trees, cars, homes } = useMemo(() => {
    const annual = scale * (FACTORS[type]?.[location] ?? 1);
    const total = annual * years;
    return {
      annualCO2: annual,
      totalCO2: total,
      trees: Math.round(total / 0.06),
      cars: Math.round(total / 4.6),
      homes: Math.round(annual / 7.5),
    };
  }, [type, scale, location, years]);

  const fmt = (n: number) => n.toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="page-content">
      <div className="section-header">
        <div>
          <div className="section-title">Carbon Impact Calculator</div>
          <div className="section-subtitle">Estimate your project&apos;s carbon reduction potential</div>
        </div>
      </div>

      <div className="card">
        <div className="calc-grid">
          <div className="calc-input-group">
            <label htmlFor="calc-type">Project Type</label>
            <select id="calc-type" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="solar">Solar Installation</option>
              <option value="heatpump">Heat Pump Retrofit</option>
              <option value="ev-fleet">EV Fleet Conversion</option>
              <option value="ev-charging">EV Charging Station</option>
              <option value="storage">Battery Storage</option>
              <option value="weatherization">Building Weatherization</option>
            </select>
          </div>
          <div className="calc-input-group">
            <label htmlFor="calc-scale">Scale (kW / units / sqft)</label>
            <input
              id="calc-scale"
              type="number"
              value={scale}
              min={1}
              onChange={(e) => setScale(parseFloat(e.target.value) || 1)}
            />
          </div>
          <div className="calc-input-group">
            <label htmlFor="calc-location">Location</label>
            <select id="calc-location" value={location} onChange={(e) => setLocation(e.target.value)}>
              <option value="seattle">Seattle (SCL Grid)</option>
              <option value="pse">PSE Service Area</option>
              <option value="wa-avg">WA State Average</option>
            </select>
          </div>
          <div className="calc-input-group">
            <label htmlFor="calc-years">Project Lifetime (years)</label>
            <input
              id="calc-years"
              type="number"
              value={years}
              min={1}
              max={50}
              onChange={(e) => setYears(parseInt(e.target.value) || 1)}
            />
          </div>
        </div>

        <div className="calc-result">
          <div className="calc-result-value">{fmt(totalCO2)}</div>
          <div className="calc-result-label">Estimated Lifetime CO₂ Reduction (metric tons)</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
          <div className="kpi-card"><div className="kpi-label">Equivalent Trees</div><div className="kpi-value accent">{fmt(trees)}</div></div>
          <div className="kpi-card"><div className="kpi-label">Cars Off Road</div><div className="kpi-value">{fmt(cars)}</div></div>
          <div className="kpi-card"><div className="kpi-label">Homes Powered</div><div className="kpi-value">{fmt(homes)}</div></div>
        </div>
      </div>

      <div className="chart-card">
        <div className="chart-title">Annual Carbon Reduction Over Project Lifetime</div>
        <div className="chart-container">
          <CarbonChart annualCO2={annualCO2} years={years} />
        </div>
      </div>
    </div>
  );
}
