import { LoanTable } from '../../src/components/LoanTable';

const sampleRows = [
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
];

const meta = {
  title: 'Loan/LoanTable',
  component: LoanTable,
  tags: ['autodocs'],
  args: { rows: sampleRows },
  parameters: { layout: 'padded' },
};

export default meta;

export const Default = {};

export const Empty = { args: { rows: [] } };
