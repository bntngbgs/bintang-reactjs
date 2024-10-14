import React, { useState } from 'react';
import styles from './Button.module.css';

const Button = () => {
  const [result, setResult] = useState('');
  const [colorClass, setColorClass] = useState('');

  return (
    <div className={styles.buttonwrapper}>
      <p className={styles.title}>2. Button</p>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles.green}`}
          onClick={() => {
            setResult('You clicked the green button!');
            setColorClass(styles.greentext);
          }}
        >
          Green Button
        </button>
        <button
          className={`${styles.button} ${styles.red}`}
          onClick={() => {
            setResult('You clicked the red button!');
            setColorClass(styles.redtext);
          }}
        >
          Red Button
        </button>
      </div>
      <p className={`${styles.result} ${colorClass}`}>{result}</p>
    </div>
  );
};

export default Button;
