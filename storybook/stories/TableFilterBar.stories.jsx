import { useState } from 'react';
import { TableFilterBar } from '../../src/components/TableFilterBar';

const meta = {
  title: 'Loan/TableFilterBar',
  component: TableFilterBar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;

export const Default = {
  render: () => {
    const [filters, setFilters] = useState({ search: '', status: '', lob: '', branch: '' });
    return (
      <div style={{ padding: 24, display: 'grid', gap: 16 }}>
        <TableFilterBar filters={filters} onChange={setFilters} />
        <pre style={{ color: 'var(--muted)', fontSize: 12 }}>
          {JSON.stringify(filters, null, 2)}
        </pre>
      </div>
    );
  },
};
