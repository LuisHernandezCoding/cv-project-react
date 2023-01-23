import React from 'react';
import PropTypes from 'prop-types';

export default class DateInput extends React.Component {
  componentDidMount() {
    this.loadState();
  }

  loadState = () => {
    const { defaultValue, callback, actualValue } = this.props;

    if (actualValue || actualValue !== null) {
      return;
    }
    callback(defaultValue);
  }

  onUpdate = (e) => {
    const { defaultValue, callback } = this.props;
    const { value } = e.target;
    if (value === '' || value === ' ') {
      e.target.value = defaultValue;
      callback(defaultValue);
      return;
    }
    callback(value);
  }

  render() {
    const {
      defaultValue,
      prefix,
      actualValue,
      dateRange,
    } = this.props;

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
          onChange={this.onUpdate}
          value={actualValue}
          min={min}
          max={max}
        />
      </div>
    );
  }
}

DateInput.propTypes = {
  actualValue: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};
