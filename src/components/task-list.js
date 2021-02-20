import React from "react";
import Task from "./task";

const TaskList = (props) => {
  const element = props.task.map((item) => {
    return (
      <Task
        task={item.task}
        key={item.id}
        id={item.id}
        completed={item.completed}
        editing={item.editing}
        checked={item.checked}
        created={item.created}
        onDeletTask={() => props.onDeletTask(item.id)}
        editingTask={props.editingTask}
        onCompletedTask={() => props.onCompletedTask(item.id)}
      />
    );
  });

  return (
    <section className="main">
      <ul className="todo-list">{element}</ul>
    </section>
  );
};

export default TaskList;
