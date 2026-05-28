import PropTypes from 'prop-types';

const NAV_ITEMS = [
  { key: 'dashboard',      label: 'Dashboard',       icon: '▦' },
  { key: 'create-loan',    label: 'Create Loan',      icon: '＋' },
  { key: 'loan-tracking',  label: 'Loan Tracking',    icon: '◎' },
  { key: 'approval-queue', label: 'Approval Queue',   icon: '✔' },
  { key: 'reports',        label: 'Reports',          icon: '≡' },
  { key: 'settings',       label: 'Settings',         icon: '⚙' },
];

export function Sidebar({ activeItem, onNavigate, onLogout, brandName = 'FIF Finance' }) {
  return (
    <aside className="sidebar" aria-label="Menu navigasi">
      <div className="sidebar-brand">
        <span className="sidebar-brand-icon" aria-hidden="true">🏦</span>
        <span className="sidebar-brand-name">{brandName}</span>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-nav-list" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <button
                type="button"
                className={`sidebar-nav-item${activeItem === item.key ? ' sidebar-nav-item-active' : ''}`}
                onClick={() => onNavigate?.(item.key)}
                aria-current={activeItem === item.key ? 'page' : undefined}
              >
                <span className="sidebar-nav-icon" aria-hidden="true">{item.icon}</span>
                <span className="sidebar-nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button type="button" className="sidebar-logout-btn" onClick={onLogout}>
          <span aria-hidden="true">⏻</span> Logout
        </button>
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  activeItem: PropTypes.string,
  onNavigate: PropTypes.func,
  onLogout:   PropTypes.func,
  brandName:  PropTypes.string,
};
