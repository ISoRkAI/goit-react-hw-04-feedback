import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import css from './App.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const btnFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return neutral + bad + good;
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((good / (good + neutral + bad)) * 100);
  };

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={btnFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {countTotalFeedback() === 0 && (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   btnFeedback = e => {
//     if (e === 'good') {
//       this.setState(prevState => {
//         return {
//           good: prevState.good + 1,
//         };
//       });
//     } else if (e === 'neutral') {
//       this.setState(prevState => {
//         return {
//           neutral: prevState.neutral + 1,
//         };
//       });
//     } else if (e === 'bad') {
//       this.setState(prevState => {
//         return {
//           bad: prevState.bad + 1,
//         };
//       });
//     }
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     const total = neutral + bad + good;
//     return total;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const positivePercentage = parseInt((good / (good + neutral + bad)) * 100);
//     return positivePercentage;
//   };
// }
