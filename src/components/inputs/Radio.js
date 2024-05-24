import React from 'react';
import PropTypes from 'prop-types';

function RadioInput({
  name, value, checked, onChange, label, className, square
}) {
  return (
    <div className={`${className || ''} flex items-center space-x-2`}>
      {!square
      && (
        <>
          <label htmlFor={`${name}-${value}`} className="cursor-pointer">
            {label || ''}
          </label>
          <input
            style={{ accentColor: '#CD2128' }}
            className="w-5 h-5"
            type="radio"
            name={name}
            id={`${name}-${value}`}
            value={value}
            checked={checked}
            onChange={onChange}
          />
        </>
      )}

      {square
      && (
        <>
          <input
            style={{ accentColor: '#A350B6' }}
            className="w-5 h-5"
            type="radio"
            name={name}
            id={`${name}-${value}`}
            value={value}
            checked={checked}
            onChange={onChange}
          />
          <label htmlFor={`${name}-${value}`} className="cursor-pointer">
            {label || ''}
          </label>
        </>
      )}
    </div>
  );
}

RadioInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  label: PropTypes.node,
  value: PropTypes.string,
  square: PropTypes.bool
};

RadioInput.defaultProps = {
  className: '',
  name: 'check',
  onChange: () => { },
  checked: false,
  label: '',
  value: '',
  square: false
};

export default RadioInput;
