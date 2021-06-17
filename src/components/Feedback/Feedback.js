import React, {Component} from "react";
import Section from "../Section/Section";
import Buttons from "../Buttons/Buttons";
import Statistics from '../Statistics/Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState((PrevState) => ({
      good: PrevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState((PrevState) => ({
      neutral: PrevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState((PrevState) => ({
      bad: PrevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <div>
        <Section title="Please leave your feedback">
          <Buttons
            onGood={this.handleIncrementGood}
            onNeutral={this.handleIncrementNeutral}
            onBad={this.handleIncrementBad}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
        </Section>
      </div>
    );
  }
}

export default Feedback;
