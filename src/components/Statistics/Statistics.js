import React from "react";
import Notification from "../Notification/Notification";
import styles from "./Statistics.module.css"

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <div>
      {good || neutral || bad !== 0 ? (
        <div className={styles.stats}>
          <p className={styles.good}>
            Good: <span>{good}</span>
          </p>
          <p className={styles.neutral}>
            Neutral: <span>{neutral}</span>
          </p>
          <p className={styles.bad}>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{total()}</span>
          </p>
          <p className={styles.percent}>
            Positive feedback: <span>{positiveFeedbackPercentage()}%</span>
          </p>
        </div>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Statistics;
