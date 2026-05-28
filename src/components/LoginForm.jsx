import { useState } from 'react';
import PropTypes from 'prop-types';
import { Panel } from './Panel';

const nonWhitespacePattern = /\S/;

export function LoginForm({ title, subtitle, buttonLabel, required, onSubmit }) {
  const [values, setValues] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    if (required && !nonWhitespacePattern.test(value)) {
      return 'Field wajib diisi dan tidak boleh hanya berisi spasi.';
    }

    return '';
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const cleaned = value.replace(/\s+/g, '');

    setValues((prev) => ({ ...prev, [name]: cleaned }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, cleaned) }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {
      username: validateField('username', values.username),
      password: validateField('password', values.password)
    };

    setErrors(nextErrors);

    const hasError = Object.values(nextErrors).some(Boolean);
    if (hasError) {
      return;
    }

    onSubmit?.({
      username: values.username.trim(),
      password: values.password
    });
  };

  return (
    <div className="login-page">
      <Panel title={title} subtitle={subtitle} tone="accent">
        <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="login-form-field">
          <label className="login-form-label" htmlFor="username">
            Username
            {required ? ' *' : ''}
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="login-form-input"
            value={values.username}
            onChange={handleChange}
            placeholder="Masukkan username"
            aria-required={required}
            required={required}
          />
          <div className="login-form-error">{errors.username}</div>
        </div>

        <div className="login-form-field">
          <label className="login-form-label" htmlFor="password">
            Password
            {required ? ' *' : ''}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            className="login-form-input"
            value={values.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            aria-required={required}
            required={required}
          />
          <div className="login-form-error">{errors.password}</div>
        </div>

        <div className="login-form-actions">
          <button type="submit" className="ui-button ui-button-accent ui-button-md">
            {buttonLabel}
          </button>
        </div>
        </form>
      </Panel>
    </div>
  );
}

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  buttonLabel: PropTypes.string,
  required: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired
};

LoginForm.defaultProps = {
  subtitle: 'Masuk untuk melanjutkan.',
  buttonLabel: 'Masuk',
  required: true
};
