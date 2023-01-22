import React from 'react';
import PropTypes from 'prop-types';

export default class InputElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualValue: '',
    };
  }

  componentDidMount() {
    this.loadState();
  }

  loadState = () => {
    const { inputName, defaultValue } = this.props;
    const actualValue = localStorage.getItem(inputName);

    if (actualValue || actualValue !== null) {
      this.setState({ actualValue });
    } else {
      this.setState({ actualValue: defaultValue });
      localStorage.setItem(inputName, defaultValue);
    }
  }

  onUpdate = (e) => {
    const { inputName, defaultValue } = this.props;
    const value = e.target.textContent;
    if (value === '' || value === ' ') {
      e.target.textContent = defaultValue;
      this.setState({ actualValue: defaultValue });
      localStorage.setItem(inputName, defaultValue);
      return;
    }
    this.setState({ actualValue: value });
    localStorage.setItem(inputName, value);
  }

  render() {
    const {
      actualValue,
    } = this.state;

    const { size, defaultValue, icon } = this.props;

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

InputElement.propTypes = {
  size: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
