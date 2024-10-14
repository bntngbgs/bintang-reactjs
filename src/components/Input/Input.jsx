import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = () => {
  const [input, setInput] = useState('');

  let handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className={styles.inputwrapper}>
      <p className={styles.title}>3. Real Time Input</p>
      <div className={styles.inputtext}>
        <input
          type="text"
          name="real-time-input"
          id="real-time-input"
          className={styles.input}
          onChange={handleInput}
        />
        <p className={styles.inputresult}>Input text : {input}</p>
      </div>
    </div>
  );
};

export default Input;
