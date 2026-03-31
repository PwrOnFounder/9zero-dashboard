'use client';

import { useEffect, useRef } from 'react';
import type { EcosystemNode, EcosystemLink } from '@/lib/data';

interface Props {
  nodes: EcosystemNode[];
  links: EcosystemLink[];
}

const COLOR_MAP: Record<string, string> = {
  hub: '#2DD4BF',
  startup: '#4ade80',
  fund: '#fbbf24',
  institution: '#a78bfa',
  government: '#60a5fa',
  event: '#f472b6',
};

export default function EcosystemGraph({ nodes, links }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = '';

    import('d3').then((d3) => {
      const width = container.clientWidth || 800;
      const height = 500;

      // Deep clone to avoid mutating props
      const nodesCopy = nodes.map((n) => ({ ...n }));
      const linksCopy = links.map((l) => ({ ...l }));

      const svg = d3.select(container)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

      const simulation = d3.forceSimulation(nodesCopy as any)
        .force('link', d3.forceLink(linksCopy as any).id((d: any) => d.id).distance(80))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('collision', d3.forceCollide().radius((d: any) => d.size + 10));

      const link = svg.append('g')
        .selectAll('line')
        .data(linksCopy)
        .join('line')
        .attr('stroke', 'var(--color-divider)')
        .attr('stroke-opacity', 0.6)
        .attr('stroke-width', 1);

      const node = svg.append('g')
        .selectAll('g')
        .data(nodesCopy)
        .join('g')
        .call(
          d3.drag<SVGGElement, any>()
            .on('start', (e, d) => { if (!e.active) simulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
            .on('drag', (e, d) => { d.fx = e.x; d.fy = e.y; })
            .on('end', (e, d) => { if (!e.active) simulation.alphaTarget(0); d.fx = null; d.fy = null; })
        );

      node.append('circle')
        .attr('r', (d: any) => d.size)
        .attr('fill', (d: any) => COLOR_MAP[d.group] || '#888')
        .attr('fill-opacity', 0.8)
        .attr('stroke', (d: any) => COLOR_MAP[d.group] || '#888')
        .attr('stroke-opacity', 0.3)
        .attr('stroke-width', 3);

      node.append('text')
        .text((d: any) => d.label)
        .attr('font-size', (d: any) => d.size > 12 ? '11px' : '9px')
        .attr('font-weight', (d: any) => d.size > 12 ? '600' : '400')
        .attr('fill', 'var(--color-text)')
        .attr('text-anchor', 'middle')
        .attr('dy', (d: any) => d.size + 14);

      simulation.on('tick', () => {
        (link as any)
          .attr('x1', (d: any) => d.source.x)
          .attr('y1', (d: any) => d.source.y)
          .attr('x2', (d: any) => d.target.x)
          .attr('y2', (d: any) => d.target.y);
        node.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
      });
    });
  }, [nodes, links]);

  return <div ref={containerRef} className="ecosystem-graph" />;
}
