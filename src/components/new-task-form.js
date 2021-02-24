import React from "react";
import PropTypes from "prop-types";

class NewTaskForm extends React.Component {
  constructor(props) {
	 
    super(props);

    const { onAddTask } = this.props;
    
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
        onAddTask(this.state.task);
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
          autoFocus
          onChange={this.onEnterTask}
        />
      </form>
    );
  }
}
NewTaskForm.defaultProps = {
	onAddTask: () => {},
 };
 
 NewTaskForm.propTypes = {
	onAddTask: PropTypes.func,
 };

export default NewTaskForm;
