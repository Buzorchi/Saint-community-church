import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { BsAsterisk } from 'react-icons/bs';

function SelectInput({
  className,
  name,
  label,
  value,
  onChange,
  disabled,
  options,
  multiple,
  placeholder,
  isRequired
}) {
  return (
    <div className={`${className} relative`}>
      <label className="text-dark mb-1.5">
        {label}
        {isRequired && (
          <BsAsterisk className="text-[#CD2128] w-2 h-auto inline mb-3" />
        )}
      </label>

      <Select
        className="select"
        classNamePrefix="react-select"
        name={name}
        value={value}
        isMulti={multiple}
        isSearchable
        onChange={onChange}
        isDisabled={disabled}
        options={options || []}
        placeholder={placeholder || ''}
      />
    </div>
  );
}

SelectInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, value: PropTypes.string })
  ),
  multiple: PropTypes.bool,
  placeholder: PropTypes.string
};

SelectInput.defaultProps = {
  className: '',
  name: '',
  onChange: () => {},
  disabled: false,
  isRequired: false,
  label: '',
  value: '',
  options: [],
  multiple: false,
  placeholder: ''
};

export default SelectInput;
