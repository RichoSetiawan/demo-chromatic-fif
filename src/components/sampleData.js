export const sampleAgenda = [
  {
    title: 'Reading Design as a Developer',
    detail: 'UCD, wireframes, specs, tokens'
  },
  {
    title: 'Design Review & Scope Lock',
    detail: 'Checklist, architecture validation'
  },
  {
    title: 'Storybook as Living Documentation',
    detail: 'Shared reference between design and engineering'
  },
  {
    title: 'Mini-Project Presentation',
    detail: 'End-to-end implementation walkthrough'
  }
];

// ─────────────────────────────────────────────
// DASHBOARD STATS
// ─────────────────────────────────────────────

export const sampleDashboardStats = [
  { label: 'Total Pengajuan', value: 128, sub: 'Bulan Juli 2025',  tone: 'default', icon: '📄' },
  { label: 'Disetujui',       value: 94,  sub: 'Rate 73%',         tone: 'green',   icon: '✅' },
  { label: 'Menunggu Review', value: 17,  sub: '3 melampaui SLA',  tone: 'accent',  icon: '⏳' },
  { label: 'Ditolak',         value: 7,   sub: 'Rate 5%',          tone: 'danger',  icon: '❌' },
];

// ─────────────────────────────────────────────
// LOAN LIST  (Analyst dashboard table)
// ─────────────────────────────────────────────

export const sampleLoanRows = [
  {
    loanId:       'LN-20250701-001',
    customerName: 'Budi Santoso',
    lob:          'FIFASTRA',
    product:      'KPM Reguler',
    amount:       25000000,
    status:       'UNDER_REVIEW',
    sla:          '2h 15m',
    slaBreached:  false,
  },
  {
    loanId:       'LN-20250701-002',
    customerName: 'Dewi Rahayu',
    lob:          'SPEKTRA',
    product:      'Elektronik',
    amount:       8500000,
    status:       'PENDING',
    sla:          '5h 40m',
    slaBreached:  true,
  },
  {
    loanId:       'LN-20250630-099',
    customerName: 'Ahmad Yusuf',
    lob:          'DANASTRA',
    product:      'Multiguna',
    amount:       50000000,
    status:       'APPROVED',
    sla:          '0h 45m',
    slaBreached:  false,
  },
  {
    loanId:       'LN-20250630-098',
    customerName: 'Siti Aminah',
    lob:          'FINATRA',
    product:      'Mikro',
    amount:       5000000,
    status:       'REJECTED',
    sla:          '1h 10m',
    slaBreached:  false,
  },
  {
    loanId:       'LN-20250629-087',
    customerName: 'Riko Prasetyo',
    lob:          'AMITRA',
    product:      'Syariah Multiguna',
    amount:       15000000,
    status:       'INTEGRATED_APPROVAL_SYSTEM',
    sla:          '3h 05m',
    slaBreached:  false,
  },
  {
    loanId:       'LN-20250629-086',
    customerName: 'Lina Wulandari',
    lob:          'FIFASTRA',
    product:      'KPM Sepeda Motor',
    amount:       18000000,
    status:       'VERIFYING',
    sla:          '1h 55m',
    slaBreached:  false,
  },
];

// ─────────────────────────────────────────────
// WORKFLOW STEPPER
// ─────────────────────────────────────────────

export const sampleActiveStep = 'ANALYST';

// ─────────────────────────────────────────────
// APPROVAL TIMELINE
// ─────────────────────────────────────────────

export const sampleTimelineEntries = [
  {
    stage:     'DUKCAPIL',
    timestamp: '01 Jul 2025, 09:15',
    note:      'Data kependudukan terverifikasi.',
  },
  {
    stage:     'SLIK',
    timestamp: '01 Jul 2025, 10:02',
    note:      'Tidak ada riwayat kredit negatif.',
  },
  {
    stage:     'SCORING',
    timestamp: '01 Jul 2025, 10:45',
    note:      'Skor kredit: 742 — kategori Baik.',
  },
];

export const sampleTimelineActiveStage = 'ANALYST';

// ─────────────────────────────────────────────
// LOAN APPLICATION  – pre-filled form values
// ─────────────────────────────────────────────

export const sampleLoanApplication = {
  dataSource: 'INTERNAL',
  customerId: 'CUST-20250701-042',
  loanDetail: {
    lob:          'FIFASTRA',
    product:      { code: 'PRD-KPM-001', name: 'KPM Reguler' },
    amount:       '25000000',
    tenorInMonth: '24',
  },
  customerData: {
    nik:              { value: '3175010101900001', isEncrypted: false },
    nama:             'Budi Santoso',
    motherMaidenName: 'Sri Wahyuni',
    income:           { amount: '8000000', currency: 'IDR' },
    dependentCount:   '2',
    birthDate:        '1990-01-01',
    birthPlace:       'Jakarta',
    phoneNumber:      { countryCode: '+62', value: '081234567890' },
    address: {
      street:     'Jl. Merdeka No. 10 RT 003/005',
      city:       'Jakarta Pusat',
      province:   'DKI Jakarta',
      postalCode: '10110',
    },
  },
  branchInformation: { branchId: 'BR-JKT-001' },
  notes: 'Nasabah existing, pengajuan prioritas. Sudah diverifikasi dokumen fisik.',
};

// ─────────────────────────────────────────────
// CURRENT USER
// ─────────────────────────────────────────────

export const sampleCurrentUser = {
  name:   'Dewi Rahayu',
  role:   'Analyst',
  branch: 'BR-JKT-001',
};

// ─────────────────────────────────────────────
// LOAN DETAIL  – single loan for detail page
// ─────────────────────────────────────────────

export const sampleLoanDetail = {
  loanId:          'LN-20250701-001',
  status:          'UNDER_REVIEW',
  submittedAt:     '01 Jul 2025, 08:30',
  lob:             'FIFASTRA',
  product:         'KPM Reguler',
  amount:          25000000,
  tenorInMonth:    24,
  customerName:    'Budi Santoso',
  customerNik:     '3175010101900001',
  customerPhone:   '+62 812-3456-7890',
  customerAddress: 'Jl. Merdeka No. 10, Jakarta Pusat, DKI Jakarta 10110',
  branchId:        'BR-JKT-001',
  notes:           'Nasabah existing, pengajuan prioritas.',
};
