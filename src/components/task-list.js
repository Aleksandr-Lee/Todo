import React from "react";
import Task from "./task";

const TaskList = (props) => {
  const element = props.task.map((item) => {
    return (
      <Task
        task={item.task}
        key={item.id}
        created={item.created}
        class={item.class}
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
