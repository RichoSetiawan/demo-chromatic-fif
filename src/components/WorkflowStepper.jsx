import PropTypes from 'prop-types';

const DEFAULT_STEPS = [
  { key: 'DUKCAPIL',  label: 'Dukcapil' },
  { key: 'SLIK',      label: 'SLIK' },
  { key: 'SCORING',   label: 'Scoring' },
  { key: 'ANALYST',   label: 'Analyst' },
  { key: 'COMMITTEE', label: 'Committee' },
  { key: 'COMPLETED', label: 'Completed' },
];

export function WorkflowStepper({ steps = DEFAULT_STEPS, activeStep, className = '' }) {
  const activeIdx = steps.findIndex((s) => s.key === activeStep);

  return (
    <div className={`workflow-stepper ${className}`.trim()} role="list" aria-label="Alur approval">
      {steps.map((step, idx) => {
        const done   = idx < activeIdx;
        const active = idx === activeIdx;

        const stateClass = done ? 'done' : active ? 'active' : 'pending';

        return (
          <div key={step.key} className={`workflow-step workflow-step-${stateClass}`} role="listitem">
            <div className="workflow-step-dot" aria-hidden="true">
              {done ? '✓' : idx + 1}
            </div>
            <span className="workflow-step-label">{step.label}</span>
            {idx < steps.length - 1 && (
              <div className={`workflow-step-connector ${done ? 'done' : ''}`} aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}

WorkflowStepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.string.isRequired, label: PropTypes.string.isRequired })
  ),
  activeStep: PropTypes.string,
  className: PropTypes.string,
};
