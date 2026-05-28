import PropTypes from 'prop-types';
import { StatusBadge } from './StatusBadge';
import { Button } from './Button';

export function LoanTable({
  rows = [],
  onApprove,
  onReject,
  onIntegrated,
  onViewDetail,
}) {
  if (rows.length === 0) {
    return (
      <div className="loan-table-empty">
        <p>Tidak ada data pengajuan.</p>
      </div>
    );
  }

  return (
    <div className="loan-table-wrapper">
      <table className="loan-table" aria-label="Daftar pengajuan pinjaman">
        <thead>
          <tr>
            <th scope="col">Loan ID</th>
            <th scope="col">Customer</th>
            <th scope="col">LOB</th>
            <th scope="col">Produk</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
            <th scope="col">SLA</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.loanId} className="loan-table-row">
              <td>
                <button
                  type="button"
                  className="loan-table-id-link"
                  onClick={() => onViewDetail?.(row)}
                >
                  {row.loanId}
                </button>
              </td>
              <td>{row.customerName}</td>
              <td>
                <span className="ui-badge ui-badge-muted">{row.lob}</span>
              </td>
              <td>{row.product}</td>
              <td className="loan-table-amount">
                {Number(row.amount).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 })}
              </td>
              <td>
                <StatusBadge status={row.status} />
              </td>
              <td>
                <span className={`loan-table-sla${row.slaBreached ? ' loan-table-sla-breached' : ''}`}>
                  {row.sla}
                </span>
              </td>
              <td>
                <div className="loan-table-actions">
                  <Button label="Approve"    variant="teal"   size="sm" onClick={() => onApprove?.(row)} />
                  <Button label="Reject"     variant="danger" size="sm" onClick={() => onReject?.(row)} />
                  <Button label="Integrated" variant="ghost"  size="sm" onClick={() => onIntegrated?.(row)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

LoanTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      loanId:       PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      lob:          PropTypes.string.isRequired,
      product:      PropTypes.string.isRequired,
      amount:       PropTypes.number.isRequired,
      status:       PropTypes.string.isRequired,
      sla:          PropTypes.string,
      slaBreached:  PropTypes.bool,
    })
  ),
  onApprove:    PropTypes.func,
  onReject:     PropTypes.func,
  onIntegrated: PropTypes.func,
  onViewDetail: PropTypes.func,
};
