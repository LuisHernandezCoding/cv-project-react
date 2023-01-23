import React from 'react';
import PropTypes from 'prop-types';

export default function SumableInput(props) {
  const {
    inputId,
    inputName,
    defaultValue,
    removeInput,
    editInput,
  } = props;

  let status = 'success';
  if (
    inputName === ''
    || inputName === ' '
    || inputName === undefined
    || inputName === null
    || inputName === defaultValue
  ) {
    status = 'fail';
  }

  return (
    <div className="flex is-fullWidth">
      <span className={`medium formIcon left ${status}`}><i className="fas fa-angle-right" /></span>
      <h2
        id={inputId}
        className={`medium formGroup borderRadius ${status}`}
        contentEditable="true"
        suppressContentEditableWarning="true"
        onFocus={(e) => {
          if (e.target.textContent === defaultValue) {
            e.target.textContent = '';
          } else {
            e.target.textContent = inputName;
          }
        }}
        onBlur={(e) => {
          if (e.target.textContent === '') {
            e.target.textContent = defaultValue;
          }
          editInput(inputId, e.target.textContent);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.target.blur();
          }
        }}
      >
        {inputName}
      </h2>
      <div
        className="medium formIcon right danger"
        onClick={() => removeInput(inputId)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            removeInput(inputId);
          }
        }}
      >
        X
      </div>
    </div>
  );
}

SumableInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  removeInput: PropTypes.func.isRequired,
  editInput: PropTypes.func.isRequired,
};
