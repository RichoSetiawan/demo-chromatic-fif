import PropTypes from 'prop-types';

export function StatCard({ label, value, sub, tone = 'default', icon, className = '' }) {
  return (
    <article className={`stat-card stat-card-${tone} ${className}`.trim()}>
      {icon && <span className="stat-card-icon" aria-hidden="true">{icon}</span>}
      <p className="stat-card-label">{label}</p>
      <p className="stat-card-value">{value}</p>
      {sub && <p className="stat-card-sub">{sub}</p>}
    </article>
  );
}

StatCard.propTypes = {
  label:     PropTypes.string.isRequired,
  value:     PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  sub:       PropTypes.string,
  tone:      PropTypes.oneOf(['default', 'accent', 'teal', 'danger', 'green']),
  icon:      PropTypes.node,
  className: PropTypes.string,
};
