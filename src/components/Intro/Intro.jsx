import React from 'react';
import styles from './Intro.module.css';

const Intro = ({ name }) => {
  return (
    <p className={styles.introtext}>
      Hello my name is {name}, I'm starting learning React JS in eduwork. Let's
      checkout my components :
    </p>
  );
};

export default Intro;
