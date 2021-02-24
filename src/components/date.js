import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

class DateTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.created,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          date: new Date(),
        }),
      0
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const resultTimer = formatDistanceToNow(this.props.created, {
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
