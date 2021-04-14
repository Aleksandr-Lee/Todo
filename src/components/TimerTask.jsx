/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';

class TimerTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      seconds: 0,
    };
  }

  getMinutes() {
    const { seconds } = this.state;
    return `0${Math.floor((seconds % 3600) / 60)}`.slice(-2);
  }

  getSeconds() {
    const { seconds } = this.state;
    return `0${seconds % 60}`.slice(-2);
  }

  startTimer = () => {
    this.setState({ isActive: true });
    this.counter = setInterval(() => {
      this.setState(({ seconds }) => ({
        seconds: seconds + 1,
      }));
    }, 1000);
  };

  pauseTimer = () => {
    clearInterval(this.counter);
    this.setState({ isActive: false });
  };

  render() {
    const { isActive } = this.state;
    const classNames = !isActive ? 'icon icon-play' : 'icon icon-pause';
    const onClickTimer = isActive ? this.pauseTimer : this.startTimer;
    return (
      <span className="description">
        <button className={classNames} onClick={onClickTimer} />
        <span> {this.getMinutes()}</span>
        <span> :{this.getSeconds()}</span>
      </span>
    );
  }
}

export default TimerTask;
