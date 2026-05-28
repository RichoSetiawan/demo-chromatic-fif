import PropTypes from 'prop-types';

const STATE_CONFIG = {
  connected:    { tone: 'teal',   dot: '●', label: 'Connected'    },
  reconnecting: { tone: 'accent', dot: '◌', label: 'Reconnecting' },
  offline:      { tone: 'danger', dot: '○', label: 'Offline'      },
};

export function RealtimeIndicator({ connectionState = 'connected', className = '' }) {
  const config = STATE_CONFIG[connectionState] ?? STATE_CONFIG.offline;

  return (
    <div
      className={`realtime-indicator realtime-indicator-${connectionState} ${className}`.trim()}
      role="status"
      aria-live="polite"
      aria-label={`Status koneksi: ${config.label}`}
    >
      <span
        className={`realtime-dot realtime-dot-${config.tone}${connectionState === 'reconnecting' ? ' realtime-dot-pulse' : ''}`}
        aria-hidden="true"
      >
        {config.dot}
      </span>
      <span className="realtime-label">{config.label}</span>
    </div>
  );
}

RealtimeIndicator.propTypes = {
  connectionState: PropTypes.oneOf(['connected', 'reconnecting', 'offline']),
  className:       PropTypes.string,
};
