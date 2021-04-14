import React from 'react';
import PropTypes from 'prop-types';
import DateTask from './Date';
import TimerTask from './TimerTask';

class Task extends React.Component {
  constructor(props) {
    super(props);
    const { task, editingTask, id, onDeletTask } = this.props;
    this.state = {
      value: task,
    };

    this.onEnterEdit = (event) => {
      this.setState({
        value: event.target.value,
      });
    };

    this.onSubmitEdit = (event) => {
      const { value } = this.state;
      event.preventDefault();
      editingTask(value, id);
      if (!value) onDeletTask(id);
    };
  }

  render() {
    const {
      completed,
      editing,
      onCompletedTask,
      task,
      created,
      editingTask,
      id,
      onDeletTask,
    } = this.props;
    const { value } = this.state;
    let classNames;
    if (completed) classNames = 'completed';
    if (editing) classNames = 'editing';

    return (
      <li className={classNames}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={onCompletedTask}
          />
          <label>
            <span className="title">{task}</span>
            <TimerTask />
            <span className="description">
              <DateTask created={created} />
            </span>
          </label>
          <button
            type="button"
            aria-label="Изменение задачи"
            className="icon icon-edit"
            onClick={() => editingTask(value, id)}
          />
          <button
            type="button"
            aria-label="Удвление задачи"
            className="icon icon-destroy"
            onClick={onDeletTask}
          />
        </div>
        <form onSubmit={this.onSubmitEdit}>
          <input
            type="text"
            className="edit"
            value={value}
            onChange={this.onEnterEdit}
          />
        </form>
      </li>
    );
  }
}
Task.defaultProps = {
  completed: false,
  editing: false,
  editingTask: () => {},
  onCompletedTask: () => {},
  onDeletTask: () => {},
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool,
  created: PropTypes.number.isRequired,
  editing: PropTypes.bool,
  editingTask: PropTypes.func,
  onCompletedTask: PropTypes.func,
  onDeletTask: PropTypes.func,
  task: PropTypes.string.isRequired,
};
export default Task;
