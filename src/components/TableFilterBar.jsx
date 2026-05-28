import PropTypes from 'prop-types';

const LOB_OPTIONS    = ['', 'FIFASTRA', 'SPEKTRA', 'DANASTRA', 'FINATRA', 'AMITRA'];
const STATUS_OPTIONS = ['', 'PENDING', 'VERIFYING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED', 'INTEGRATED_APPROVAL_SYSTEM'];

export function TableFilterBar({ filters, onChange }) {
  const set = (key, value) => onChange?.({ ...filters, [key]: value });

  return (
    <div className="filter-bar" role="search" aria-label="Filter pengajuan">
      <input
        type="search"
        className="filter-bar-search form-input"
        placeholder="🔍  Cari nama nasabah..."
        value={filters.search ?? ''}
        onChange={(e) => set('search', e.target.value)}
        aria-label="Cari nama nasabah"
      />

      <select
        className="filter-bar-select form-input"
        value={filters.status ?? ''}
        onChange={(e) => set('status', e.target.value)}
        aria-label="Filter status"
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s} value={s}>{s || 'Semua Status'}</option>
        ))}
      </select>

      <select
        className="filter-bar-select form-input"
        value={filters.lob ?? ''}
        onChange={(e) => set('lob', e.target.value)}
        aria-label="Filter LOB"
      >
        {LOB_OPTIONS.map((l) => (
          <option key={l} value={l}>{l || 'Semua LOB'}</option>
        ))}
      </select>

      <input
        type="text"
        className="filter-bar-branch form-input"
        placeholder="Branch ID"
        value={filters.branch ?? ''}
        onChange={(e) => set('branch', e.target.value)}
        aria-label="Filter branch"
      />
    </div>
  );
}

TableFilterBar.propTypes = {
  filters:  PropTypes.shape({
    search: PropTypes.string,
    status: PropTypes.string,
    lob:    PropTypes.string,
    branch: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func,
};
