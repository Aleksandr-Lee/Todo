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
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={task}
          // eslint-disable-next-line jsx-a11y/no-autofocus
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
