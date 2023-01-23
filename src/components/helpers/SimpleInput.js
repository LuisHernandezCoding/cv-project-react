import React from 'react';
import PropTypes from 'prop-types';

export default class SimpleInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    this.loadState();
  }

  updateState = (value) => {
    this.setState({ value });
  }

  loadState = () => {
    const {
      defaultValue,
      callback,
      actualValue,
    } = this.props;

    const { value } = this.state;
    if (value !== actualValue) {
      this.updateState(actualValue);
    }

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
      this.setState({ value: defaultValue });
      callback(defaultValue);
      return;
    }
    this.updateState(value);
    callback(value);
  }

  render() {
    const {
      size,
      defaultValue,
      icon,
    } = this.props;

    const { value } = this.state;

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
          onBlur={(e) => this.onUpdate(e)}
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
  }
}

SimpleInput.propTypes = {
  size: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  actualValue: PropTypes.string.isRequired,
};
