// components/Button.js
import React from 'react';
import styles from './Button.module.css'; // Importando módulo de estilo

function Button({ label }) {
  return <button className={styles.button}>{label}</button>;
}

export default Button;
