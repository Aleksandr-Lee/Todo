import React from "react";
import PropTypes from "prop-types";
import DateTask from "./date";

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.task,
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

  render() {
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
            <DateTask created={this.props.created} />
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
Task.defaultProps = {
  checked: false,
  completed: false,
  created: new Date() - 1,
  editing: false,
  editingTask: () => {},
  onCompletedTask: () => {},
  onDeletTask: () => {},
  task: "Error",
};

Task.propTypes = {
  checked: PropTypes.bool,
  completed: PropTypes.bool,
  created: PropTypes.number,
  editing: PropTypes.bool,
  editingTask: PropTypes.func,
  onCompletedTask: PropTypes.func,
  onDeletTask: PropTypes.func,
  task: PropTypes.string,
};
export default Task;
