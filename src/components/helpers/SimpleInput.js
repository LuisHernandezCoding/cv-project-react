import React from 'react';
import PropTypes from 'prop-types';

export default class SimpleInput extends React.Component {
  componentDidMount() {
    this.loadState();
  }

  loadState = () => {
    const {
      defaultValue,
      callback,
      actualValue,
    } = this.props;

    if (actualValue || actualValue !== null) {
      return;
    }
    callback(defaultValue);
  }

  onUpdate = (e) => {
    const { defaultValue, callback } = this.props;
    const value = e.target.textContent;
    if (value === '' || value === ' ') {
      e.target.textContent = defaultValue;
      callback(defaultValue);
      return;
    }
    callback(value);
  }

  render() {
    const {
      size,
      defaultValue,
      icon,
      actualValue,
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
          onBlur={(e) => this.onUpdate(e)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              e.target.blur();
            }
          }}
        >
          {actualValue}
        </h2>
        <span className={`${size} formIcon right ${status}`}><i className="fas fa-edit" /></span>
      </div>
    );
  }
}

SimpleInput.propTypes = {
  size: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  actualValue: PropTypes.string.isRequired,
};
