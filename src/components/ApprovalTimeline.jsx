import PropTypes from 'prop-types';

const DEFAULT_STAGES = [
  { key: 'DUKCAPIL',  label: 'Dukcapil Verification' },
  { key: 'SLIK',      label: 'SLIK Verification' },
  { key: 'SCORING',   label: 'Credit Scoring' },
  { key: 'ANALYST',   label: 'Analyst Review' },
  { key: 'COMMITTEE', label: 'Committee Approval' },
  { key: 'COMPLETED', label: 'Completed' },
];

export function ApprovalTimeline({ stages = DEFAULT_STAGES, activeStage, entries = [] }) {
  const activeIdx = stages.findIndex((s) => s.key === activeStage);

  return (
    <ol className="approval-timeline" aria-label="Timeline approval">
      {stages.map((stage, idx) => {
        const done   = idx < activeIdx;
        const active = idx === activeIdx;
        const entry  = entries.find((e) => e.stage === stage.key);

        const stateClass = done ? 'done' : active ? 'active' : 'pending';

        return (
          <li key={stage.key} className={`timeline-item timeline-item-${stateClass}`}>
            <div className="timeline-marker" aria-hidden="true">
              {done ? '✓' : idx + 1}
            </div>
            <div className="timeline-content">
              <p className="timeline-stage-label">{stage.label}</p>
              {entry?.timestamp && (
                <time className="timeline-timestamp" dateTime={entry.timestamp}>
                  {entry.timestamp}
                </time>
              )}
              {entry?.note && <p className="timeline-note">{entry.note}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}

ApprovalTimeline.propTypes = {
  stages: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ),
  activeStage: PropTypes.string,
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      stage:     PropTypes.string.isRequired,
      timestamp: PropTypes.string,
      note:      PropTypes.string,
    })
  ),
};
