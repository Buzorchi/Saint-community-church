/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

function Button({
  children, className, type,
  onClick, border, boxBorderColor,
  disabled, fontSize, fullWidth,
  bgColor, textColor,
  paddingY, paddingX
}) {
  return (
    <div className={`relative pr-1 ${fullWidth ? 'w-full' : 'inline-block'}`}>
      <div className={`absolute w-[calc(100%-4px)] h-full -z-0 left-1 top-1 border-2 ${boxBorderColor}`} />
      <button
        type={type}
        className={`relative w-full ${fontSize} ${bgColor} ${textColor} ${paddingX
        } ${paddingY} ${border ? 'border-2 border-primary' : ''
        } flex justify-center items-center transition ease-in-out hover:bg-opacity-70 disabled:border-0 ${className
        } disabled:cursor-default disabled:bg-opacity-40 disabled:text-white`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  fontSize: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  paddingY: PropTypes.string,
  paddingX: PropTypes.string,
  border: PropTypes.bool,
  fullWidth: PropTypes.bool,
  boxBorderColor: PropTypes.string,
  type: PropTypes.string
};

Button.defaultProps = {
  children: 'Button',
  className: '',
  onClick: () => { },
  disabled: false,
  fontSize: 'text-base',
  bgColor: 'bg-primary',
  textColor: 'text-secondary',
  paddingY: 'py-4',
  paddingX: 'px-10',
  border: false,
  fullWidth: false,
  boxBorderColor: 'border-white',
  type: 'button'
};

export default Button;
