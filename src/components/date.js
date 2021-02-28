import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

class DateTask extends React.Component {
  constructor(props) {
    super(props);
    const { created } = this.props;
    this.state = {
      date: created,
    };
    this.componentDidMount = () => {
      this.timerID = setInterval(
        () =>
          this.setState({
            date: created,
          }),
        0
      );
    };

    this.componentWillUnmount = () => {
      clearInterval(this.timerID);
    };
  }

  render() {
    const { date } = this.state;
    const resultTimer = formatDistanceToNow(date, {
      includeSeconds: true,
    });

    return <span className="created">created {resultTimer} ago</span>;
  }
}

DateTask.defaultProps = {
  created: new Date() - 1,
};

DateTask.propTypes = {
  created: PropTypes.number,
};
export default DateTask;
