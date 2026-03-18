import React from 'react';
import PropTypes from 'prop-types';

function closeAlert() {
  const alert = document.getElementById('alert');
  alert.classList.add('slideOutToRight');
  setTimeout(() => {
    alert.classList.remove('slideOutToRight');
    alert.classList.add('is-hidden');
  }, 300);
}

export default function Alert({ message, type }) {
  if (!message || message === '' || message === 'undefined' || message === 'null') {
    return null;
  }
  return (
    <div className={`alert ${type} slideInFromRight`} id="alert">
      <p className="message">{message}</p>
      <div className="close" onClick={closeAlert} role="button" tabIndex={0} onKeyPress={closeAlert}>
        <i className="fas fa-times" />
      </div>
    </div>
  );
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
