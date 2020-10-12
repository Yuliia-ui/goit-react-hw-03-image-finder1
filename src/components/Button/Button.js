import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Button/Button.module.css';

const Button = ({ onClickLoad }) => (
  <button type="button" className={styles.Button} onClick={onClickLoad}>
    Load more
  </button>
);

export default Button;

Button.propTypes = {
  onClickLoad: PropTypes.func.isRequired,
};
