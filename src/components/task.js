import React from "react";
// import Date from "./date";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task,
      date: this.props.created,
    };

    this.onEnterEdit = (e) => {
      this.setState({
        value: e.target.value,
      });
    };

    this.onSubmitEdit = (e) => {
      e.preventDefault();
      this.props.editingTask(this.state.value, props.id);
      if (!this.state.value) this.props.onDeletTask(props.id);
    };

    this.onChecked = () => {};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () =>
        this.setState({
          date: new Date(new Date()),
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
    let classNames;
    if (this.props.completed) classNames = "completed";
    if (this.props.editing) classNames = "editing";

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.checked}
            onClick={this.props.onCompletedTask}
            onChange={this.onChecked}
          />
          <label>
            <span className="description">{this.props.task}</span>
            <span className="created">created {resultTimer} ago</span>
            {/* <Date /> */}
            {/* <Date created={this.props.created} /> */}
          </label>
          <button
            className="icon icon-edit"
            onClick={() =>
              this.props.editingTask(this.state.value, this.props.id)
            }
          ></button>
          <button
            className="icon icon-destroy"
            onClick={this.props.onDeletTask}
          ></button>
        </div>
        <form onSubmit={this.onSubmitEdit}>
          <input
            type="text"
            className="edit"
            value={this.state.value}
            onChange={this.onEnterEdit}
          />
        </form>
      </li>
    );
  }
}

export default Task;
