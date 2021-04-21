import React from 'react';
import PropTypes from 'prop-types';

class TimerTask extends React.Component {
  startTimer = () => {
    const { id, timeTask } = this.props;
    this.counter = setInterval(() => timeTask(id), 1000);
  };

  pauseTimer = () => {
    clearInterval(this.counter);
  };

  render() {
    const { timer } = this.props;
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
