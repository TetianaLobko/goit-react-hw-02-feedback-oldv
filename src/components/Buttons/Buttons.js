import React from "react";
import styles from "./Buttons.module.css"

const Buttons = ({onGood, onNeutral, onBad}) => {
  return (
    <div>
      <button type="button" className={styles.button__good} onClick={onGood}>
        Good
      </button>
      <button type="button" className={styles.button__neutral} onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" className={styles.button__bad} onClick={onBad}>
        Bad
      </button>
    </div>
  );
};

export default Buttons;
