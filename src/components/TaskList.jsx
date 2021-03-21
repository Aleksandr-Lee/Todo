import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = (props) => {
  const { task, onDeletTask, editingTask, onCompletedTask } = props;

  const element = task.map((item) => (
    <Task
      task={item.task}
      key={item.id}
      id={item.id}
      completed={item.completed}
      editing={item.editing}
      created={item.created}
      onDeletTask={() => onDeletTask(item.id)}
      editingTask={editingTask}
      onCompletedTask={() => onCompletedTask(item.id)}
    />
  ));
  return (
    <section className="main">
      <ul className="todo-list">{element}</ul>
    </section>
  );
};

TaskList.defaultProps = {
  onDeletTask: () => {},
  editingTask: () => {},
  onCompletedTask: () => {},
};

TaskList.propTypes = {
  task: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeletTask: PropTypes.func,
  editingTask: PropTypes.func,
  onCompletedTask: PropTypes.func,
};
export default TaskList;
