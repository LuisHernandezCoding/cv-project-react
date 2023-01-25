import React from 'react';
import PropTypes from 'prop-types';

function IconButton(props) {
  const { className, onClick, icon } = props;
  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
    >
      <i className={icon} />
    </button>
  );
}

IconButton.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

export default IconButton;
