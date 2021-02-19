import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task,
    };

    this.onEnterEdit = (e) => {
      e.preventDefault();
      this.setState({
        value: e.target.value,
      });
    };

    this.onSubmitEdit = (e) => {
      e.preventDefault();
      this.props.editingTask(this.state.value, props.id);
      this.setState((state) => {
        return {};
      });
    };

    this.onChecked = () => {};
  }
  render() {
    let classNames;
    if (this.props.completed) {
      classNames = "completed";
    }
    if (this.props.editing) {
      classNames = "editing";
    } else {
      classNames = "";
    }

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
            <span className="created">
              created{" "}
              {formatDistanceToNow(this.props.created, {
                includeSeconds: true,
              })}{" "}
              ago
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.props.onEdit}
            // onClick={this.props.onEditingTask}
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
// const Task = (props) => {
//   const result = formatDistanceToNow(props.created, { includeSeconds: true });

// };
