import React from "react";
import TaskFilter from "./tasks-filter";

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">{props.itemsLeftCount} items left</span>
      <TaskFilter
        filterTasks={props.filterTasks}
        onFilterTasks={props.onFilterTasks}
      />
      <button
        className="clear-completed"
        onClick={() => props.onClearCompletedTasks(props.completedTask)}
      >
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
