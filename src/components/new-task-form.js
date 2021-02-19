import React from "react";

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
    this.onEnterTask = (e) => {
      this.setState({
        task: e.target.value,
      });
    };
    this.onSubmit = (e) => {
      e.preventDefault();
      if (this.state.task) {
        this.props.onAddTask(this.state.task);
        this.setState({
          task: "",
        });
      }
    };
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.task}
          //  autofocus="autofocus"
          onChange={this.onEnterTask}
        />
      </form>
    );
  }
}

export default NewTaskForm;
