// ================================================================
// DATA — 9Zero Climate Innovation Hub Dashboard
// ================================================================

export interface Grant {
  name: string;
  funder: string;
  amount: string;
  deadline: string;
  status: 'Open' | 'Rolling' | 'Monitoring' | 'Closed';
  sectors: string[];
  match: number;
  url: string;
}

export interface RFP {
  name: string;
  org: string;
  value: string;
  deadline: string;
  status: 'Open' | 'Upcoming' | 'Design Phase' | 'Closed';
  sectors: string[];
  url: string;
}

export interface Bill {
  id: string;
  name: string;
  status: string;
  desc: string;
  impact: 'High' | 'Medium' | 'Low';
  category: string;
}

export interface Investor {
  name: string;
  type: string;
  hq: string;
  focus: string;
  check: string;
  aum: string;
  connection: string;
  url: string;
  sectors: string[];
}

export interface Member {
  name: string;
  sector: string;
  desc: string;
  founder: string;
  url: string;
}

export interface CalendarEvent {
  name: string;
  date: string;
  location: string;
  url: string;
  desc: string;
  type: 'deadline' | 'event' | 'milestone' | 'compliance';
}

export interface EcosystemNode {
  id: string;
  label: string;
  group: 'hub' | 'startup' | 'fund' | 'institution' | 'government' | 'event';
  size: number;
}

export interface EcosystemLink {
  source: string;
  target: string;
}

export const GRANTS: Grant[] = [
  { name: 'Clean Energy Fund RD&D', funder: 'WA Commerce (CEF)', amount: '$5M', deadline: 'TBD (solicitation opened early 2026)', status: 'Open', sectors: ['Hardware', 'Software', 'Energy', 'Materials'], match: 95, url: 'https://www.commerce.wa.gov/epic/rdd/' },
  { name: 'Clean Energy Grants (2025-2027)', funder: 'WA Commerce (EPIC)', amount: '$32M total', deadline: 'Closed (next cycle ~2027)', status: 'Closed', sectors: ['Energy', 'Hardware'], match: 70, url: 'https://www.commerce.wa.gov/epic/clean-energy-grants/' },
  { name: 'CETCAP (IRA Tax Credits)', funder: 'WA Commerce / IRS', amount: '30-70% of project costs', deadline: 'Ongoing', status: 'Open', sectors: ['Energy', 'Hardware', 'Software'], match: 90, url: 'https://www.commerce.wa.gov/federal-energy-funding/cetcap/' },
  { name: 'Community EV Charger Grants', funder: 'WA Commerce', amount: 'Up to $110K/connector', deadline: 'Rolling', status: 'Rolling', sectors: ['Hardware', 'EV', 'Software'], match: 80, url: 'https://www.commerce.wa.gov/growing-the-economy/energy/clean-transportation/ev-charging-program/' },
  { name: 'NEVI Formula Program', funder: 'WSDOT (Federal)', amount: '~$71M over 5 years', deadline: 'Ongoing', status: 'Rolling', sectors: ['Hardware', 'EV', 'Software'], match: 75, url: 'https://www.fhwa.dot.gov/bipartisan-infrastructure-law/nevi_formula_program.cfm' },
  { name: 'Green Transportation Capital', funder: 'WSDOT', amount: 'Varies', deadline: 'Rolling', status: 'Rolling', sectors: ['Hardware', 'EV', 'Energy'], match: 65, url: 'https://wsdot.wa.gov/business-wsdot/grants/green-transportation-capital-grants' },
  { name: 'ZEV Carshare Grant (ZAP)', funder: 'WSDOT', amount: '$50K-$200K', deadline: 'Next round ~spring 2027', status: 'Closed', sectors: ['EV', 'Software', 'Energy'], match: 55, url: 'https://wsdot.wa.gov/business-wsdot/grants/zero-emission-vehicle-grants/zero-emissions-access-program-grant' },
  { name: 'EPA CPRG (King County)', funder: 'EPA → King County', amount: '$50M total', deadline: 'Through 2029', status: 'Open', sectors: ['Hardware', 'Software', 'Energy'], match: 85, url: 'https://kingcounty.gov/en/dept/executive/governance-leadership/climate-office' },
  { name: 'DOE GRIP Program', funder: 'DOE', amount: 'Up to hundreds of millions', deadline: 'Monitor', status: 'Monitoring', sectors: ['Software', 'Hardware', 'Energy'], match: 70, url: 'https://www.energy.gov/gdo/grid-resilience-and-innovation-partnerships-grip-program' },
  { name: 'DOE Energy Dominance Financing', funder: 'DOE (fmr. LPO)', amount: '$400B+ authority', deadline: 'Rolling', status: 'Open', sectors: ['Hardware', 'Materials', 'Energy'], match: 60, url: 'https://www.energy.gov/lpo' },
  { name: 'Diesel Emission Reduction (VW)', funder: 'WA Ecology', amount: 'Up to $3.5M', deadline: 'Monitor next cycle', status: 'Monitoring', sectors: ['Hardware', 'EV', 'Energy'], match: 50, url: 'https://ecology.wa.gov/about-us/payments-contracts-grants/grants-loans/find-a-grant-or-loan/volkswagen-enforcement-action-grants' },
  { name: 'Industrial Symbiosis TA', funder: 'WA Commerce (CCA)', amount: '$2.4M', deadline: 'Mar 9, 2026', status: 'Closed', sectors: ['Materials', 'Energy', 'Software'], match: 40, url: 'https://www.commerce.wa.gov/funding/industrial-symbiosis-technical-assistance/' },
  { name: 'WAZIP Clean Truck Vouchers', funder: 'WA Ecology', amount: '$112M total', deadline: 'Launches April 2026', status: 'Open', sectors: ['EV', 'Hardware', 'Energy'], match: 75, url: 'https://ecology.wa.gov' },
  { name: 'Zero-Emission School Bus Grants', funder: 'WA Ecology', amount: '$15M', deadline: 'Apr 23, 2026', status: 'Open', sectors: ['EV', 'Hardware'], match: 60, url: 'https://ecology.wa.gov' },
  { name: 'CPRG Energize Spaces', funder: 'King County (EPA)', amount: 'Up to $200K/project', deadline: 'Apr 20, 2026', status: 'Open', sectors: ['Hardware', 'Energy', 'Software'], match: 80, url: 'https://kingcounty.gov/en/dept/executive/governance-leadership/climate-office' },
];

export const RFPS: RFP[] = [
  { name: '2026 Utility-Scale Clean Energy RFP', org: 'Puget Sound Energy', value: '~1,500+ MW', deadline: 'Apr 10, 2026', status: 'Open', sectors: ['Energy', 'Software', 'Hardware', 'Materials'], url: 'https://www.pse.com/en/pages/energy-supply/acquiring-energy/2026-Voluntary-Utility-Scale-RFP' },
  { name: 'Building Decarbonization Grant', org: 'King County (EPA CPRG)', value: '$7M total pool', deadline: 'Apr 6, 2026', status: 'Open', sectors: ['Software', 'Hardware', 'Energy', 'Materials'], url: 'https://kingcounty.gov/en/dept/dnrp/buildings-property/green-sustainable-building/building-decarbonization/grants-for-government-buildings' },
  { name: 'Energy Compliance & Decarb IDIQ', org: 'Port of Seattle', value: '$2M-$3M/contract', deadline: 'Q1 2026', status: 'Upcoming', sectors: ['Software', 'Energy', 'Hardware'], url: 'https://www.portseattle.org/business/bid-opportunities' },
  { name: 'Clean Ports Community Capacity', org: 'Port of Seattle', value: '$150K-$200K', deadline: 'Q1 2026', status: 'Upcoming', sectors: ['Software', 'Energy'], url: 'https://www.portseattle.org/business/bid-opportunities' },
  { name: 'Fleet Fast EV Charging', org: 'Port of Seattle', value: '$10M-$12M', deadline: 'Q1 2028', status: 'Upcoming', sectors: ['Hardware', 'EV', 'Energy', 'Software'], url: 'https://www.portseattle.org/business/bid-opportunities' },
  { name: 'Industrial Symbiosis TA RFP', org: 'WA Dept. of Commerce', value: '$2.4M', deadline: 'Mar 9, 2026', status: 'Closed', sectors: ['Materials', 'Energy', 'Software'], url: 'https://www.commerce.wa.gov/funding/industrial-symbiosis-technical-assistance/' },
  { name: '2026-2029 Community Solar', org: 'Seattle City Light', value: '~$14.8M', deadline: '2026-2028 construction', status: 'Design Phase', sectors: ['Energy', 'Hardware', 'Software'], url: 'https://www.seattle.gov/city-light/residential-services/home-energy-solutions/solar-power' },
  { name: 'Public Charging Incentive', org: 'Seattle City Light', value: 'Up to $280K/site', deadline: 'Rolling', status: 'Open', sectors: ['Hardware', 'EV', 'Software', 'Energy'], url: 'https://www.seattle.gov/city-light/energy/electrification/transportation-electrification/public-charging-incentive' },
];

export const BILLS: Bill[] = [
  { id: 'SB 6355', name: 'Transmission Authority', status: 'Passed', desc: 'Creates WA Electricity Transmission Authority. 20-year needs assessment, debt financing for new transmission lines. Signed by Governor Ferguson.', impact: 'High', category: 'Grid' },
  { id: 'SB 5982', name: 'CETA Data Center Loophole Closure', status: 'Passed', desc: 'Closes loophole allowing data centers to circumvent Clean Energy Transformation Act requirements. Strengthens utility clean energy mandates.', impact: 'High', category: 'Energy' },
  { id: 'HB 1903', name: 'Energy Assistance', status: 'Passed — Awaiting Signature', desc: 'Expands energy assistance programs for low-income households. Passed both chambers, awaiting Governor\'s signature.', impact: 'Medium', category: 'Equity' },
  { id: 'HB 1237', name: 'EFSEC Reform', status: 'Passed', desc: 'Timely/predictable recommendations; clearer approval standards for large clean energy projects. Signed into law.', impact: 'Medium', category: 'Siting' },
  { id: 'HB 2509', name: 'Efficient EFSEC Reviews', status: 'Passed', desc: 'Streamlined environmental documentation for clean energy siting. Companion to HB 1237.', impact: 'Medium', category: 'Siting' },
  { id: 'E2SHB 2515', name: 'Data Center Clean Energy', status: 'Failed', desc: 'Would have required new ELEUFs to use 80%+ clean energy by 2030 and prohibited free CCA allowances. Did not pass the full legislature.', impact: 'High', category: 'Energy' },
  { id: 'SB 5466', name: 'Transmission Authority (Original)', status: 'Stalled', desc: 'Earlier version of transmission authority legislation. Superseded by SB 6355 which passed instead.', impact: 'Low', category: 'Grid' },
  { id: 'HB 1328', name: 'Clean Energy Development Office', status: 'Failed', desc: 'Would have created centralized state support for clean energy project siting within Commerce. Did not advance.', impact: 'Medium', category: 'Siting' },
  { id: 'SB 5208', name: 'New Clean Energy Fund', status: 'Dead', desc: 'Would have created additional funding streams for clean energy deployment. Did not advance in 2026 session.', impact: 'Medium', category: 'Funding' },
  { id: 'SB 5821', name: 'Nuclear Energy Support', status: 'Dead', desc: 'Proposed support for nuclear energy development in Washington. Did not advance.', impact: 'Low', category: 'Energy' },
  { id: 'Budget', name: 'CCA Revenue Diversion', status: 'Passed', desc: 'Legislature diverted ~$540M from CCA revenue to fill general fund budget gaps. Reduces climate investment accounts.', impact: 'High', category: 'Funding' },
];

export const INVESTORS: Investor[] = [
  { name: 'E8 Angels', type: 'Angel Network', hq: 'Seattle, WA', focus: 'All cleantech', check: '$25K-$500K', aum: '$67M+ deployed', connection: 'SCIH events co-presenter', url: 'https://www.e8angels.com', sectors: ['Energy', 'Hardware', 'Materials', 'Software'] },
  { name: 'Stepchange Ventures', type: 'Seed VC', hq: 'Seattle, WA', focus: 'Climate software', check: '$100K-$200K', aum: '$3M Fund I', connection: 'Ben Eidelson is 9Zero member', url: 'https://www.stepchangeventures.com', sectors: ['Software', 'Energy'] },
  { name: 'VertueLab Climate Impact Fund', type: 'Nonprofit Fund', hq: 'Seattle/Portland', focus: 'Early cleantech, equity', check: '$50K-$400K', aum: '$9.5M+ deployed', connection: 'SCIH founding partner', url: 'https://www.vertuelab.org', sectors: ['Energy', 'Hardware', 'Software', 'Materials'] },
  { name: 'WA State Green Bank', type: 'Government', hq: 'Seattle, WA', focus: 'Clean energy financing', check: 'Project-based loans', aum: 'Growing', connection: 'Eli Lieberman is 9Zero member', url: '#', sectors: ['Energy', 'Hardware'] },
  { name: 'Climate Pledge Fund', type: 'Corporate VC', hq: 'Seattle, WA', focus: 'All climate sectors', check: '$5M-$100M+', aum: '$2B committed', connection: 'Amazon HQ Seattle', url: 'https://fund.theclimatepledge.com', sectors: ['Energy', 'Hardware', 'Materials', 'Software', 'EV'] },
  { name: 'Microsoft Climate Innovation Fund', type: 'Corporate VC', hq: 'Redmond, WA', focus: 'Carbon, water, waste', check: 'Undisclosed', aum: '$1B fund', connection: 'E8 sponsor, PNW presence', url: 'https://www.microsoft.com/en-us/corporate-responsibility/sustainability/climate-innovation-fund', sectors: ['Software', 'Energy', 'Materials', 'Hardware'] },
  { name: 'Breakthrough Energy Ventures', type: 'Series A-C VC', hq: 'Kirkland, WA', focus: 'Deep tech, hard-to-abate', check: '$10M-$100M+', aum: '$3.5B+', connection: 'Seattle-area HQ', url: 'https://www.b-t.energy/ventures/', sectors: ['Energy', 'Hardware', 'Materials'] },
  { name: 'Congruent Ventures', type: 'Seed-Series A VC', hq: 'San Francisco, CA', focus: 'Full-stack climate', check: '$1M-$10M', aum: '~$600M', connection: 'Active PNW dealflow', url: 'https://www.congruentvc.com', sectors: ['Energy', 'Software', 'Materials'] },
  { name: 'Clean Energy Ventures', type: 'Seed-Series A VC', hq: 'Boston, MA', focus: 'Clean energy hardware', check: '$500K-$5M', aum: '~$110M', connection: 'E8 Angels partner', url: 'https://cleanenergyventures.com', sectors: ['Energy', 'Hardware'] },
  { name: 'SE Ventures (Schneider Electric)', type: 'Corporate VC', hq: 'Menlo Park, CA', focus: 'Electrification, industrial', check: '$500K-$20M+', aum: '€1B+', connection: 'Global PNW presence', url: 'https://www.seventures.com', sectors: ['Hardware', 'Software', 'Energy'] },
  { name: 'Prelude Ventures', type: 'Seed-Series B VC', hq: 'San Francisco, CA', focus: 'Climate mitigation', check: '$1M-$15M', aum: 'Multi-fund', connection: 'PNW portfolio history', url: 'https://www.preludeventures.com', sectors: ['Energy', 'Software', 'Materials', 'Hardware'] },
  { name: 'Elemental Impact', type: 'Nonprofit Fund', hq: 'Honolulu/SF', focus: 'Community-impact climate', check: 'Up to $3M', aum: '$79M+ deployed', connection: 'PNW portfolio', url: 'https://elementalimpact.com', sectors: ['Energy', 'Software', 'Hardware'] },
  { name: 'Earth Finance', type: 'Advisory/Seed', hq: 'Seattle, WA', focus: 'Climate strategy', check: 'Seed-stage', aum: '$14M raised', connection: 'Reuven Carlyle, ex-WA senator', url: 'https://www.earthfinance.com', sectors: ['Energy', 'Software'] },
  { name: 'Russell Family Foundation', type: 'Family Office', hq: 'Gig Harbor, WA', focus: 'Decarb, nature, forestry', check: '$250K-$19M', aum: '~$100M deployed', connection: 'Funds VertueLab', url: 'https://trff.org', sectors: ['Energy', 'Materials'] },
  { name: 'Toba Capital', type: 'Series A-C VC', hq: 'Newport Beach, CA', focus: 'Climate & energy', check: '$250K-$50M', aum: '$1.3B', connection: 'Susan Su in Seattle', url: 'https://tobacapital.com', sectors: ['Energy', 'Software', 'Hardware'] },
  { name: 'Voyager Ventures', type: 'Seed-Series A VC', hq: 'San Francisco, CA', focus: 'Energy, industrials', check: '$1M-$15M', aum: '$475M', connection: 'Amazon Climate Pledge co-investor', url: 'https://voyagervc.com', sectors: ['Energy', 'Hardware', 'Materials', 'Software'] },
  { name: 'Alante Capital', type: 'Seed-Series A VC', hq: 'Santa Barbara, CA', focus: 'Circular economy', check: '$500K-$5M', aum: 'Single fund', connection: 'PNW event participant', url: 'https://alantecapital.com', sectors: ['Materials', 'Hardware'] },
  { name: 'PSL Ventures', type: 'Seed VC', hq: 'Seattle, WA', focus: 'Broad tech, climate', check: '$500K-$5M', aum: '$100M fund', connection: 'Seattle native', url: 'https://psl.com', sectors: ['Software', 'Energy'] },
  { name: 'HASI', type: 'Public Corp', hq: 'Annapolis, MD', focus: 'Infrastructure, renewables', check: '$5M-$500M+', aum: '$8B+ managed', connection: 'Guy van Syckle is 9Zero member', url: 'https://www.hasi.com', sectors: ['Energy', 'Hardware'] },
  { name: 'WA Commerce Clean Energy Fund', type: 'Government Grant', hq: 'Olympia, WA', focus: 'All clean energy', check: '$50K-$3M grants', aum: '$150M+ since 2013', connection: 'State program', url: 'https://www.commerce.wa.gov/funding/apply-now-for-clean-energy-grants/', sectors: ['Energy', 'Hardware', 'Software', 'Materials'] },
  { name: 'UW CEI / Clean Energy Testbeds', type: 'University', hq: 'Seattle, WA', focus: 'Solar, batteries, grid', check: 'Research grants + access', aum: 'N/A', connection: 'SCIH ecosystem partner', url: 'https://www.cei.washington.edu', sectors: ['Energy', 'Hardware', 'Materials'] },
  { name: 'UW CoMotion Labs', type: 'University Incubator', hq: 'Seattle, WA', focus: 'Pre-seed climate tech', check: 'Non-dilutive + network', aum: 'N/A', connection: 'SCIH founding partner', url: 'https://comotion.uw.edu', sectors: ['Energy', 'Hardware', 'Software', 'Materials'] },
  { name: 'CleanTech Alliance', type: 'Industry Network', hq: 'Seattle, WA', focus: 'All cleantech', check: 'Network/events', aum: '1,100 members', connection: 'PNW ecosystem', url: 'https://www.cleantechalliance.org', sectors: ['Energy', 'Hardware', 'Software', 'Materials'] },
  { name: 'Washington Research Foundation', type: 'University Fund', hq: 'Seattle, WA', focus: 'UW spinout commercialization', check: '$250K-$3M', aum: 'Multi-fund', connection: 'WA innovations', url: 'https://www.wrfseattle.org', sectors: ['Hardware', 'Energy', 'Materials'] },
  { name: 'Maritime Blue', type: 'Industry Cluster', hq: 'Seattle, WA', focus: 'Maritime decarb', check: 'Network', aum: '135+ members', connection: 'PNW ecosystem', url: 'https://maritimeblue.org', sectors: ['Energy', 'Hardware'] },
  { name: 'Alliance of Angels', type: 'Angel Network', hq: 'Seattle, WA', focus: 'General + cleantech', check: '$250K-$1.5M', aum: '200+ members', connection: 'Syndicates with E8', url: 'https://www.allianceofangels.com', sectors: ['Software', 'Energy', 'Hardware'] },
];

export const MEMBERS: Member[] = [
  { name: 'PwrOn', sector: 'Energy', desc: 'Portable power P2P marketplace. 95 stations deployed, seeking $500K seed.', founder: 'Darian Parrish', url: 'https://pwron.co' },
  { name: 'Forge', sector: 'Software', desc: 'AI copilot for infrastructure project delivery. CoMotion Cohort 1.', founder: 'Angelo Liao', url: '#' },
  { name: 'Nimbus Aerospace', sector: 'Mobility', desc: 'Hybrid-electric 6-passenger private jet. Preparing first flight of quarter-scale aircraft.', founder: '', url: '#' },
  { name: 'Electra', sector: 'Software', desc: 'Product stewardship as a service — tracks, collects, monetizes end-of-life clean energy assets.', founder: '', url: '#' },
  { name: 'Bio Fiber Industries', sector: 'Materials', desc: 'Converts organic waste from cannabis, hops, hemp into high-performance bio-based materials.', founder: '', url: '#' },
  { name: 'ZILA Bioworks', sector: 'Materials', desc: 'Plant-based resins and epoxies replacing petrochemical alternatives.', founder: 'Jason Puracal', url: '#' },
  { name: 'Blue Dot Motorworks', sector: 'Mobility', desc: '$6K-$9K plug-in hybrid conversion kits for any vehicle. Piloting with BC school districts.', founder: '', url: '#' },
  { name: 'YIMBY AI', sector: 'Software', desc: 'AI-powered platform to accelerate urban infilling — simplifies zoning/permitting for ADUs. Climate Hackathon grand prize winner.', founder: 'Chris Esh', url: '#' },
  { name: 'Benchmark Star', sector: 'Software', desc: 'Building energy benchmarking and BEPS compliance platform. Seattle Climate Hackathon winner.', founder: '', url: '#' },
  { name: 'Capture6', sector: 'Hardware', desc: 'Water-positive carbon dioxide removal company. Direct air capture technology.', founder: '', url: 'https://capture6.com' },
  { name: 'Einride', sector: 'Mobility', desc: 'Electric and autonomous transport company. Product Director is 9Zero member.', founder: '', url: 'https://www.einride.tech' },
  { name: 'Verde Technologies', sector: 'Energy', desc: 'Climate technology company. Co-Founder & CCO is 9Zero member.', founder: '', url: '#' },
  { name: 'Circular Spring', sector: 'Materials', desc: 'Biochar On Site program — circular economy initiative for carbon sequestration.', founder: '', url: '#' },
  { name: 'Acclaim Climate', sector: 'Software', desc: 'Platform for low-carbon industrial chemicals — concrete, iron, steel. Hackathon runner-up.', founder: '', url: '#' },
  { name: 'Big Green Loop', sector: 'Materials', desc: "Plant-based, carbon-negative packaging for grocery/foodservice. 'Most Climate Impact' award.", founder: '', url: '#' },
  { name: 'Global Impact Collective', sector: 'Software', desc: 'Strategy and UX for climate impact. Hosted Food Waste to Justice event at 9Zero.', founder: '', url: '#' },
  { name: 'VertueLab', sector: 'Fund', desc: 'Nonprofit climate impact fund. $9.5M+ deployed. SCIH founding partner.', founder: 'Aina Mapinduzi', url: 'https://www.vertuelab.org' },
  { name: 'UW CoMotion Labs', sector: 'Incubator', desc: 'Climate tech incubator. 8-month cohort. Cohort 2 launching April 2026. SCIH founding partner.', founder: 'Ashlee Esteban', url: 'https://comotion.uw.edu' },
  { name: 'E8 Angels', sector: 'Fund', desc: 'Largest US cleantech angel network. 130+ members, $67M+ deployed.', founder: 'Karin Kidder', url: 'https://www.e8angels.com' },
  { name: 'Stepchange Ventures', sector: 'Fund', desc: "Climate-first seed fund. 20+ portfolio companies. Ben Eidelson calls 9Zero 'the clear physical nexus of Seattle climate tech.'", founder: 'Ben Eidelson', url: 'https://www.stepchangeventures.com' },
  { name: 'Bayou Energy', sector: 'Software', desc: 'Utility data access for clean energy installations. Stepchange portfolio.', founder: '', url: '#' },
  { name: 'Photon Marine', sector: 'Hardware', desc: 'Electric marine propulsion. VertueLab CIF portfolio.', founder: '', url: '#' },
  { name: 'BlueDot Photonics', sector: 'Hardware', desc: 'Perovskite solar technology. VertueLab + E8 co-investment.', founder: '', url: '#' },
  { name: 'Nori', sector: 'Software', desc: 'Carbon removal marketplace. $7M Series A. Seattle-based.', founder: '', url: '#' },
  { name: 'Ever.green', sector: 'Software', desc: 'Clean energy tax credit marketplace. PSL Ventures-backed.', founder: '', url: '#' },
  { name: 'Earth Finance', sector: 'Fund', desc: 'Climate strategy & financing advisory. Acquired Climate Engine/SpatiaFi in 2025.', founder: 'Reuven Carlyle', url: 'https://www.earthfinance.com' },
  { name: 'WA State Green Bank', sector: 'Fund', desc: "State green bank leveraging public + private capital. Eli Lieberman calls 9Zero 'invaluable for climate finance networking.'", founder: 'Eli Lieberman', url: '#' },
  { name: 'Thresh Power', sector: 'Software', desc: 'AI stack for clean energy developers. Energy Generation Cluster Ambassador at 9Zero.', founder: 'Mark Grozen-Smith', url: '#' },
  { name: 'Rubbish', sector: 'Software', desc: 'AI-powered waste characterization platform. 9Zero member spotlight.', founder: 'Emin Israfil', url: '#' },
  { name: 'Wherobots', sector: 'Software', desc: 'Spatial Intelligence Cloud for geospatial analytics. Active 9Zero member.', founder: 'Ben Pruden', url: '#' },
  { name: 'SNØCAP', sector: 'Fund', desc: 'Climate VC fund focused on early-stage climate investments. 9Zero member.', founder: 'Jonathan Azoff', url: '#' },
  { name: 'Rizoma', sector: 'Fund', desc: 'Boutique climate M&A advisory firm. 9Zero member.', founder: 'Claire Veuthey', url: '#' },
  { name: 'Climeworks', sector: 'Hardware', desc: 'Global DAC pioneer. Direct air capture at scale. 9Zero member presence.', founder: 'Marco Hartmann', url: 'https://climeworks.com' },
  { name: 'Clean Energy Leadership Inst.', sector: 'Incubator', desc: 'Workforce development for the clean energy transition. 9Zero member.', founder: 'Esther Morales', url: '#' },
];

export const EVENTS: CalendarEvent[] = [
  { name: 'UW CoMotion Cohort 2 Kickoff', date: '2026-04-02', location: 'Seattle Climate Innovation Hub', url: 'https://comotion.uw.edu', desc: 'Confirmed via Luma event.', type: 'milestone' },
  { name: 'DOE SPARK Concept Papers Due', date: '2026-04-02', location: 'Online (grants.gov)', url: 'https://www.energy.gov', desc: '$1.9B DOE program for clean energy innovation. Concept papers due.', type: 'deadline' },
  { name: 'King County Decarb Grant Deadline', date: '2026-04-06', location: 'Online Submission', url: 'https://kingcounty.gov/en/dept/dnrp/buildings-property/green-sustainable-building/building-decarbonization/grants-for-government-buildings', desc: 'Full applications due for $7M building decarbonization grants.', type: 'deadline' },
  { name: 'CleanTech Alliance Data Center Lunch', date: '2026-04-08', location: 'Seattle', url: 'https://www.cleantechalliance.org', desc: 'Industry lunch on data center energy policy and WA legislative outcomes.', type: 'event' },
  { name: 'PSE RFP Bids Due', date: '2026-04-10', location: 'Puget Sound Energy', url: 'https://www.pse.com/en/pages/energy-supply/acquiring-energy/2026-Voluntary-Utility-Scale-RFP', desc: 'Bids due for 2026 Voluntary Utility-Scale Clean Energy RFP. 1,556 MW deficit + 2.9M MWh needed.', type: 'deadline' },
  { name: 'Living Future Conference', date: '2026-04-14', location: 'Seattle', url: 'https://living-future.org', desc: 'Annual conference on regenerative design, buildings, and the built environment. 4 days.', type: 'event' },
  { name: 'Port of Seattle Energy IDIQ Due', date: '2026-04-17', location: 'Port of Seattle', url: 'https://www.portseattle.org/business/bid-opportunities', desc: 'Energy Compliance & Decarbonization IDIQ responses due. $2M-$3M per contract.', type: 'deadline' },
  { name: 'King County CPRG Energize Spaces Due', date: '2026-04-20', location: 'Online Submission', url: 'https://kingcounty.gov/en/dept/executive/governance-leadership/climate-office', desc: 'Community building decarbonization program applications due.', type: 'deadline' },
  { name: 'WA Ecology Zero Emission School Bus', date: '2026-04-23', location: 'Online', url: 'https://ecology.wa.gov', desc: '$15M in grants for zero-emission school buses. Applications due.', type: 'deadline' },
  { name: 'E8 Angels Decarbon8 Applications Open', date: '2026-05-01', location: 'Seattle', url: 'https://www.e8angels.com', desc: 'Decarbon8-US philanthropic impact fund opens applications for 2026 cohort.', type: 'milestone' },
  { name: 'CCA-CA-QC Linkage Comment Deadline', date: '2026-05-01', location: 'Online', url: 'https://ecology.wa.gov/air-climate/climate-commitment-act', desc: 'Public comment deadline on draft WA-CA-Quebec carbon market linkage agreement.', type: 'deadline' },
  { name: 'PNW Climate Week 2026', date: '2026-07-13', location: 'Seattle + 10+ cities', url: 'https://pnwclimateweek.org', desc: 'The only regional climate week in North America. July 13-19. 220+ events expected.', type: 'event' },
  { name: 'Seattle Tech Week', date: '2026-07-27', location: 'Seattle', url: '#', desc: 'July 27-31. Event submissions open April 9. Climate tech track expected.', type: 'event' },
  { name: 'WA Fusion Week', date: '2026-08-31', location: 'Seattle', url: '#', desc: "Aug 31 - Sept 3. Celebrating WA state's fusion energy leadership.", type: 'event' },
  { name: 'CleanTech Innovation Showcase', date: '2026-09-03', location: 'Seattle', url: 'https://www.cleantechalliance.org', desc: 'Annual CleanTech Alliance showcase of Pacific Northwest innovations.', type: 'event' },
  { name: 'CoMotion Cohort 2 Demo Day', date: '2026-09-15', location: 'Seattle Climate Innovation Hub', url: 'https://comotion.uw.edu', desc: 'Cohort 2 companies present to investors and ecosystem partners.', type: 'milestone' },
  { name: 'BEPS First Reporting (>220K SF)', date: '2027-10-01', location: 'Seattle', url: 'https://www.seattle.gov/environment/climate-change/buildings-and-energy/building-energy-performance', desc: 'Largest buildings must verify and report GHG benchmarking.', type: 'compliance' },
];

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  { id: '9zero', label: '9Zero Hub', group: 'hub', size: 20 },
  { id: 'uw-comotion', label: 'UW CoMotion', group: 'institution', size: 14 },
  { id: 'vertuelab', label: 'VertueLab', group: 'fund', size: 14 },
  { id: 'seattle-oed', label: 'Seattle OED', group: 'government', size: 12 },
  { id: 'e8', label: 'E8 Angels', group: 'fund', size: 12 },
  { id: 'stepchange', label: 'Stepchange', group: 'fund', size: 10 },
  { id: 'cleantech-alliance', label: 'CleanTech Alliance', group: 'institution', size: 12 },
  { id: 'uw-cei', label: 'UW CEI', group: 'institution', size: 11 },
  { id: 'pwron', label: 'PwrOn', group: 'startup', size: 8 },
  { id: 'forge', label: 'Forge', group: 'startup', size: 8 },
  { id: 'nimbus', label: 'Nimbus Aerospace', group: 'startup', size: 8 },
  { id: 'zila', label: 'ZILA Bioworks', group: 'startup', size: 8 },
  { id: 'biofib', label: 'Bio Fiber', group: 'startup', size: 8 },
  { id: 'electra', label: 'Electra', group: 'startup', size: 8 },
  { id: 'bluedot', label: 'Blue Dot MW', group: 'startup', size: 8 },
  { id: 'photon', label: 'Photon Marine', group: 'startup', size: 7 },
  { id: 'bluedotph', label: 'BlueDot Photonics', group: 'startup', size: 7 },
  { id: 'nori', label: 'Nori', group: 'startup', size: 7 },
  { id: 'bayou', label: 'Bayou Energy', group: 'startup', size: 7 },
  { id: 'evergreen', label: 'Ever.green', group: 'startup', size: 7 },
  { id: 'amazon-cpf', label: 'Climate Pledge Fund', group: 'fund', size: 14 },
  { id: 'microsoft-cif', label: 'Microsoft CIF', group: 'fund', size: 13 },
  { id: 'bev', label: 'Breakthrough Energy', group: 'fund', size: 14 },
  { id: 'wa-greenbank', label: 'WA Green Bank', group: 'government', size: 10 },
  { id: 'pnw-cw', label: 'PNW Climate Week', group: 'event', size: 10 },
  { id: 'wa-commerce', label: 'WA Commerce', group: 'government', size: 12 },
  { id: 'earth-finance', label: 'Earth Finance', group: 'fund', size: 9 },
  { id: 'russell', label: 'Russell Family Fdn', group: 'fund', size: 10 },
  { id: 'hasi', label: 'HASI', group: 'fund', size: 10 },
  { id: 'maritime-blue', label: 'Maritime Blue', group: 'institution', size: 9 },
  { id: 'capture6', label: 'Capture6', group: 'startup', size: 8 },
  { id: 'yimby', label: 'YIMBY AI', group: 'startup', size: 8 },
  { id: 'einride', label: 'Einride', group: 'startup', size: 8 },
  { id: 'thresh', label: 'Thresh Power', group: 'startup', size: 8 },
  { id: 'benchmark', label: 'Benchmark Star', group: 'startup', size: 7 },
  { id: 'verde', label: 'Verde Tech', group: 'startup', size: 7 },
  { id: 'snocap', label: 'SNØCAP', group: 'fund', size: 9 },
  { id: 'toba', label: 'Toba Capital', group: 'fund', size: 10 },
  { id: 'congruent', label: 'Congruent', group: 'fund', size: 9 },
  { id: 'psl', label: 'PSL Ventures', group: 'fund', size: 9 },
  { id: 'wa-ecology', label: 'WA Ecology', group: 'government', size: 10 },
];

export const ECOSYSTEM_LINKS: EcosystemLink[] = [
  { source: '9zero', target: 'uw-comotion' }, { source: '9zero', target: 'vertuelab' },
  { source: '9zero', target: 'seattle-oed' }, { source: '9zero', target: 'e8' },
  { source: '9zero', target: 'stepchange' }, { source: '9zero', target: 'wa-greenbank' },
  { source: '9zero', target: 'hasi' }, { source: '9zero', target: 'pnw-cw' },
  { source: 'uw-comotion', target: 'forge' }, { source: 'uw-comotion', target: 'nimbus' },
  { source: 'uw-comotion', target: 'zila' }, { source: 'uw-comotion', target: 'biofib' },
  { source: 'uw-comotion', target: 'electra' }, { source: 'uw-comotion', target: 'bluedot' },
  { source: 'uw-comotion', target: 'uw-cei' }, { source: 'uw-comotion', target: 'pnw-cw' },
  { source: 'vertuelab', target: 'photon' }, { source: 'vertuelab', target: 'bluedotph' },
  { source: 'vertuelab', target: 'cleantech-alliance' }, { source: 'vertuelab', target: 'russell' },
  { source: 'e8', target: 'uw-cei' }, { source: 'e8', target: 'cleantech-alliance' },
  { source: 'stepchange', target: 'bayou' }, { source: '9zero', target: 'pwron' },
  { source: 'amazon-cpf', target: '9zero' }, { source: 'microsoft-cif', target: 'uw-cei' },
  { source: 'bev', target: 'uw-cei' }, { source: 'wa-commerce', target: '9zero' },
  { source: 'wa-commerce', target: 'wa-greenbank' }, { source: 'earth-finance', target: '9zero' },
  { source: 'nori', target: '9zero' }, { source: 'evergreen', target: '9zero' },
  { source: 'maritime-blue', target: '9zero' }, { source: 'cleantech-alliance', target: '9zero' },
  { source: 'forge', target: 'pnw-cw' }, { source: 'e8', target: 'vertuelab' },
  { source: '9zero', target: 'capture6' }, { source: '9zero', target: 'yimby' },
  { source: '9zero', target: 'einride' }, { source: '9zero', target: 'thresh' },
  { source: '9zero', target: 'benchmark' }, { source: '9zero', target: 'verde' },
  { source: '9zero', target: 'snocap' }, { source: 'toba', target: '9zero' },
  { source: 'congruent', target: '9zero' }, { source: 'psl', target: 'evergreen' },
  { source: 'wa-ecology', target: 'wa-commerce' }, { source: 'wa-ecology', target: '9zero' },
];
