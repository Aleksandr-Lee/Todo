import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

class Date extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.props.created,
    };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(new Date()),
    });
  }
  render() {
    //  console.log(this.state.date);
    return (
      <span className="created">
        {/* {this.state.date.toLocaleTimeString()} */}
        created{" "}
        {formatDistanceToNow(this.state.date, {
          includeSeconds: true,
        })}{" "}
        ago
      </span>
    );
  }
}

export default Date;
