import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BsEye, BsEyeSlash, BsAsterisk } from 'react-icons/bs';

function TextInput({
  className, value, name, readOnly, onBlur, disabled, onKeyPress, onKeyDown,
  minDate, maxDate, type, onChange, label, placeholder, extraInfo, isRequired
}) {
  const [inputType, setInputType] = useState(type);

  return (
    <div className={`${className} relative`}>
      <label htmlFor={name} className="text-dark mb-1.5">
        {label}
        {isRequired && <BsAsterisk className="text-[#CD2128] w-2 h-auto inline mb-3" />}
      </label>

      {extraInfo}

      <input
        className="bg-secondary text-dark h-14 px-5 outline-none w-full border border-borderColor"
        type={inputType}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={placeholder}
        onBlur={onBlur}
        disabled={disabled}
        onKeyPress={onKeyPress}
        onKeyDown={onKeyDown}
        min={minDate}
        max={maxDate}
      />

      {type === 'password' && (
        <span data-testid="toggle-password" className="absolute right-4 bottom-3 items-center text-gray-700">
          {inputType === 'password' ? (
            <BsEye className="w-5 h-auto cursor-pointer items-center text-[#B5B6B6]" onClick={() => setInputType('text')} />
          ) : (
            <BsEyeSlash className="w-5 h-auto cursor-pointer" onClick={() => setInputType('password')} />
          )}
        </span>
      )}
    </div>
  );
}
TextInput.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  readOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onKeyPress: PropTypes.func,
  onKeyDown: PropTypes.func,
  minDate: PropTypes.number,
  maxDate: PropTypes.number,
  label: PropTypes.string,
  extraInfo: PropTypes.node,
  placeholder: PropTypes.string
};

TextInput.defaultProps = {
  className: '',
  type: 'text',
  onChange: () => { },
  value: '',
  name: '',
  readOnly: false,
  onBlur: () => { },
  disabled: false,
  onKeyPress: () => { },
  onKeyDown: () => { },
  minDate: undefined,
  maxDate: undefined,
  isRequired: false,
  label: '',
  extraInfo: '',
  placeholder: ''
};

export default TextInput;
