import React from 'react';
import { useState } from 'react';
import styles from './Counter.module.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={styles.counterwrapper}>
      <p className={styles.title}>1. Counter</p>
      <div className={styles.counter}>
        <span className={`${styles.count} ${styles.minus}`} onClick={decrement}>
          -
        </span>
        <span className={styles.displaycount}>{count}</span>
        <span className={`${styles.count} ${styles.plus}`} onClick={increment}>
          +
        </span>
      </div>
    </div>
  );
};

export default Counter;
