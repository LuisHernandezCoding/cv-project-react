import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SimpleInput = ({
  size,
  defaultValue,
  icon,
  callback,
  actualValue,
}) => {
  const [value, setValue] = useState('');

  const loadState = () => {
    if (value !== actualValue) {
      setValue(actualValue);
    }

    if (actualValue || actualValue !== null) {
      return;
    }
    callback(defaultValue);
  };

  useEffect(() => {
    loadState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUpdate = (e) => {
    const value = e.target.textContent;
    if (value === '' || value === ' ') {
      e.target.textContent = defaultValue;
      setValue(defaultValue);
      callback(defaultValue);
      return;
    }
    setValue(value);
    callback(value);
  };

  let status = 'success';
  if (
    value === ''
    || value === ' '
    || value === undefined
    || value === null
    || value === defaultValue
  ) {
    status = 'fail';
  }

  return (
    <div className="flex is-fullWidth">
      <span className={`${size} formIcon left ${status}`}><i className={`fas fa-${icon}`} /></span>
      <h2
        className={`${size} formGroup ${status} borderRadius`}
        contentEditable="true"
        suppressContentEditableWarning="true"
        onFocus={(e) => {
          if (e.target.textContent === defaultValue) {
            e.target.textContent = '';
          }
        }}
        onBlur={(e) => onUpdate(e)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.target.blur();
          }
        }}
      >
        {value}
      </h2>
      <span className={`${size} formIcon right ${status}`}><i className="fas fa-edit" /></span>
    </div>
  );
};

SimpleInput.propTypes = {
  size: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  actualValue: PropTypes.string.isRequired,
};

export default SimpleInput;
