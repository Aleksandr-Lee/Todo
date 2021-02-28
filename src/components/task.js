import React from 'react';
import PropTypes from 'prop-types';
import DateTask from './date';

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

    this.onChecked = () => {};
  }

  render() {
    const {
      completed,
      editing,
      checked,
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
            checked={checked}
            onClick={onCompletedTask}
            onChange={this.onChecked}
          />
          <label>
            <span className="description">{task}</span>
            <DateTask created={created} />
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
  id: undefined,
  checked: false,
  completed: false,
  created: new Date() - 1,
  editing: false,
  editingTask: () => {},
  onCompletedTask: () => {},
  onDeletTask: () => {},
  task: 'Error',
};

Task.propTypes = {
  id: PropTypes.number,
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
