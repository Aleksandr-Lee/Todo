/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends React.Component {
  constructor(props) {
    super(props);

    const { onAddTask } = this.props;

    this.state = {
      task: '',
    };

    this.onEnterTask = (event) => {
      this.setState({
        task: event.target.value,
      });
    };
    this.onSubmit = (event) => {
      event.preventDefault();
      const { task } = this.state;
      if (task) {
        onAddTask(task);
        this.setState({
          task: '',
        });
      }
    };
  }

  render() {
    const { task } = this.state;
    return (
      <form className="new-todo-form" onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={task}
          autoFocus
          onChange={this.onEnterTask}
        />
        {/* <input className="new-todo-form__timer" placeholder="Min" />
        <input className="new-todo-form__timer" placeholder="Sec" /> */}
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
