import { StatCard } from '../../src/components/StatCard';

const meta = {
  title: 'Loan/StatCard',
  component: StatCard,
  tags: ['autodocs'],
  args: {
    label: 'Total Pengajuan',
    value: 128,
    sub:   'Bulan ini',
    tone:  'default',
    icon:  '📄',
  },
  parameters: { layout: 'padded' },
};

export default meta;

export const Default = {};

export const Approved = {
  args: { label: 'Disetujui', value: 94, sub: 'Bulan ini', tone: 'green', icon: '✅' },
};

export const Pending = {
  args: { label: 'Menunggu Review', value: 17, sub: '3 melampaui SLA', tone: 'accent', icon: '⏳' },
};

export const Rejected = {
  args: { label: 'Ditolak', value: 7, sub: 'Bulan ini', tone: 'danger', icon: '❌' },
};

export const Dashboard = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, padding: 24 }}>
      <StatCard label="Total Pengajuan" value={128}   sub="Bulan ini"          tone="default" icon="📄" />
      <StatCard label="Disetujui"        value={94}    sub="Bulan ini"          tone="green"   icon="✅" />
      <StatCard label="Menunggu Review"  value={17}    sub="3 melampaui SLA"    tone="accent"  icon="⏳" />
      <StatCard label="Ditolak"          value={7}     sub="Bulan ini"          tone="danger"  icon="❌" />
    </div>
  ),
};
