import { ApprovalTimeline } from '../../src/components/ApprovalTimeline';

const sampleEntries = [
  { stage: 'DUKCAPIL',  timestamp: '2025-07-01 09:15', note: 'Data kependudukan terverifikasi.' },
  { stage: 'SLIK',      timestamp: '2025-07-01 10:02', note: 'Tidak ada riwayat negatif.' },
  { stage: 'SCORING',   timestamp: '2025-07-01 10:45', note: 'Skor kredit: 742.' },
];

const meta = {
  title: 'Loan/ApprovalTimeline',
  component: ApprovalTimeline,
  tags: ['autodocs'],
  args: {
    activeStage: 'ANALYST',
    entries: sampleEntries,
  },
  parameters: { layout: 'padded' },
};

export default meta;

export const Default = {};

export const JustStarted = {
  args: { activeStage: 'DUKCAPIL', entries: [] },
};

export const Completed = {
  args: {
    activeStage: 'COMPLETED',
    entries: [
      ...sampleEntries,
      { stage: 'ANALYST',   timestamp: '2025-07-01 13:00', note: 'Disetujui oleh analis.' },
      { stage: 'COMMITTEE', timestamp: '2025-07-01 15:30', note: 'Keputusan komite: disetujui.' },
      { stage: 'COMPLETED', timestamp: '2025-07-01 16:00', note: 'Proses selesai.' },
    ],
  },
};
