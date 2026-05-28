import PropTypes from 'prop-types';

export function TopNavbar({ pageTitle, userName, userRole, onMenuToggle, notificationCount = 0 }) {
  return (
    <header className="top-navbar">
      <div className="top-navbar-left">
        {onMenuToggle && (
          <button
            type="button"
            className="top-navbar-menu-btn"
            onClick={onMenuToggle}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        )}
        <h1 className="top-navbar-title">{pageTitle}</h1>
      </div>

      <div className="top-navbar-right">
        {notificationCount > 0 && (
          <button type="button" className="top-navbar-notif" aria-label={`${notificationCount} notifikasi`}>
            🔔
            <span className="top-navbar-notif-count">{notificationCount}</span>
          </button>
        )}

        <div className="top-navbar-user" aria-label="Info pengguna">
          <div className="top-navbar-avatar" aria-hidden="true">
            {userName?.charAt(0)?.toUpperCase() ?? '?'}
          </div>
          <div className="top-navbar-user-info">
            <span className="top-navbar-user-name">{userName}</span>
            {userRole && <span className="top-navbar-user-role">{userRole}</span>}
          </div>
        </div>
      </div>
    </header>
  );
}

TopNavbar.propTypes = {
  pageTitle:         PropTypes.string.isRequired,
  userName:          PropTypes.string,
  userRole:          PropTypes.string,
  onMenuToggle:      PropTypes.func,
  notificationCount: PropTypes.number,
};
