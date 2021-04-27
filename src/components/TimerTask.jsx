import React from 'react';
import PropTypes from 'prop-types';

class TimerTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerPlay: false,
      timer: 0,
    };
  }

  componentDidMount() {
    const { timer } = this.props;
    this.setState({
      timer,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    const { timerPlay } = this.state;
    if (!timerPlay) {
      this.timer = setInterval(this.timerCount, 1000);
      this.setState({
        timerPlay: true,
      });
    }
  };

  timerCount = () => {
    this.setState(({ timer }) => ({ timer: timer + 1 }));
  };

  pauseTimer = () => {
    const { timeTask, id } = this.props;
    const { timer } = this.state;
    clearInterval(this.timer);
    this.setState({
      timerPlay: false,
    });
    timeTask(id, timer);
  };

  render() {
    const { timer } = this.state;
    const minute = `0${Math.floor((timer % 3600) / 60)}`.slice(-2);
    const second = `0${timer % 60}`.slice(-2);

    return (
      <span className="description">
        <button
          type="button"
          aria-label="Запуск таймера"
          className="icon icon-play"
          onClick={this.startTimer}
        />
        <button
          type="button"
          aria-label="Остановка таймера"
          className="icon icon-pause"
          onClick={this.pauseTimer}
        />
        <span> {minute}</span>
        <span> :{second}</span>
      </span>
    );
  }
}

TimerTask.defaultProps = {
  timer: 0,
  timeTask: () => {},
};

TimerTask.propTypes = {
  id: PropTypes.number.isRequired,
  timeTask: PropTypes.func,
  timer: PropTypes.number,
};

export default TimerTask;

// class TimerTask extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       timerPlay: false,
//     };
//   }

//   startTimer = () => {
//     const { timerPlay } = this.state;
//     const { id, timeTask } = this.props;
//     this.setState({ timerPlay: true });
//     if (!timerPlay) {
//       this.timer = setInterval(() => timeTask(id), 1000);
//     }
//   };

//   pauseTimer = () => {
//     clearInterval(this.timer);
//     this.setState({ timerPlay: false });
//   };

//   render() {
//     const { timer } = this.props;
//     const minute = `0${Math.floor((timer % 3600) / 60)}`.slice(-2);
//     const second = `0${timer % 60}`.slice(-2);

//     return (
//       <span className="description">
//         <button
//           type="button"
//           aria-label="Запуск таймера"
//           className="icon icon-play"
//           onClick={this.startTimer}
//         />
//         <button
//           type="button"
//           aria-label="Остановка таймера"
//           className="icon icon-pause"
//           onClick={this.pauseTimer}
//         />
//         <span> {minute}</span>
//         <span> :{second}</span>
//       </span>
//     );
//   }
// }

// TimerTask.defaultProps = {
//   timer: 0,
//   timeTask: () => {},
// };

// TimerTask.propTypes = {
//   id: PropTypes.number.isRequired,
//   timeTask: PropTypes.func,
//   timer: PropTypes.number,
// };

// export default TimerTask;
