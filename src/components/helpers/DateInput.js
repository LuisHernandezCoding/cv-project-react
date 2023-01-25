import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const DateInput = ({
  defaultValue,
  prefix,
  actualValue,
  dateRange,
  callback,
}) => {
  const [value, setValue] = useState(actualValue);

  useEffect(() => {
    if (actualValue || actualValue !== null) {
      return;
    }
    callback(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualValue]);

  const onUpdate = (e) => {
    const { value: inputValue } = e.target;
    if (inputValue === '' || inputValue === ' ') {
      setValue(defaultValue);
      callback(defaultValue);
      return;
    }
    setValue(inputValue);
    callback(inputValue);
  };

  let status = 'success';
  if (
    actualValue === ''
    || actualValue === ' '
    || actualValue === undefined
    || actualValue === null
    || actualValue === defaultValue
  ) {
    status = 'fail';
  }

  const today = new Date().toISOString().split('T')[0];
  let [min, max] = [today, '2100-01-01'];
  if (dateRange === 'past') {
    [min, max] = ['1900-01-01', today];
  }

  return (
    <div className="is-fullWidth">
      <span className={`formIcon left ${status}`}>
        {prefix}
      </span>
      &nbsp;
      <input
        type="date"
        className={`date ${status}`}
        onChange={onUpdate}
        value={value}
        min={min}
        max={max}
      />
    </div>
  );
};
DateInput.propTypes = {
  actualValue: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default DateInput;
