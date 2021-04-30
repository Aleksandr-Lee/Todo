/* eslint-disable react/no-unused-state */
import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class DateTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerId: null,
    };
  }

  componentDidMount() {
    this.taskCreationTimer();
  }

  componentWillUnmount() {
    clearTimeout(this.timerId);
  }

  taskCreationTimer = () => {
    const delay = 10000;
    clearTimeout(this.timerId);
    const newTimerId = setTimeout(() => {
      this.taskCreationTimer();
    }, delay);
    this.setState({ timerId: newTimerId });
  };

  render() {
    const { created } = this.props;
    const resultTimer = formatDistanceToNow(created, {
      includeSeconds: true,
    });
    return <span className="created">created {resultTimer} ago</span>;
  }
}

DateTask.propTypes = {
  created: PropTypes.number.isRequired,
};
export default DateTask;

// class DateTask extends React.Component {
//   constructor(props) {
//     super(props);
//     const { created } = this.props;
//     this.state = {
//       date: created,
//     };
//   }

//   componentDidMount = () => {
//     const { created } = this.props;
//     this.timerID = setInterval(
//       () =>
//         this.setState({
//           date: new Date(created),
//         }),
//       15000
//     );
//   };

//   componentWillUnmount = () => {
//     clearInterval(this.timerID);
//   };

//   render() {
//     const { date } = this.state;
//     const resultTimer = formatDistanceToNow(date, {
//       includeSeconds: true,
//     });
//     return <span className="created">created {resultTimer} ago</span>;
//   }
// }

// DateTask.propTypes = {
//   created: PropTypes.number.isRequired,
// };
// export default DateTask;
