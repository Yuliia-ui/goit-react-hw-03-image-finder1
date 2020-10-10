import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Button/Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={styles.button} onClick={onClick}>
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
