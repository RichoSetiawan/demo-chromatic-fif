import PropTypes from 'prop-types';

export function Badge({ text, tone = 'accent' }) {
  return <span className={`ui-badge ui-badge-${tone}`}>Title: {text} Bibi</span>;
}

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  tone: PropTypes.oneOf(['accent', 'teal', 'danger', 'muted'])
};