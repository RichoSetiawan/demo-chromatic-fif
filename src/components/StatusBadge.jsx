import PropTypes from 'prop-types';

const STATUS_MAP = {
  PENDING:                    { tone: 'accent',  label: 'Pending' },
  VERIFYING:                  { tone: 'accent',  label: 'Verifying' },
  UNDER_REVIEW:               { tone: 'teal',    label: 'Under Review' },
  APPROVED:                   { tone: 'green',   label: 'Approved' },
  REJECTED:                   { tone: 'danger',  label: 'Rejected' },
  INTEGRATED_APPROVAL_SYSTEM: { tone: 'blue',    label: 'Integrated Approval' },
};

export function StatusBadge({ status, className = '' }) {
  const config = STATUS_MAP[status] ?? { tone: 'muted', label: status };

  return (
    <span className={`ui-badge ui-badge-${config.tone} ${className}`.trim()}>
      {config.label}
    </span>
  );
}

StatusBadge.propTypes = {
  status: PropTypes.oneOf(Object.keys(STATUS_MAP)).isRequired,
  className: PropTypes.string,
};
