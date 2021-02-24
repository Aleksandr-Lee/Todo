import React from "react";
import PropTypes from "prop-types";
import TaskFilter from "./tasks-filter";

const Footer = (props) => {
  const {
    itemsLeftCount,
    filterTasks,
    onFilterTasks,
    onClearCompletedTasks,
    completedTask,
  } = props;
  return (
    <footer className="footer">
      <span className="todo-count">{itemsLeftCount} items left</span>
      <TaskFilter filterTasks={filterTasks} onFilterTasks={onFilterTasks} />
      <button
        className="clear-completed"
        onClick={() => onClearCompletedTasks(completedTask)}
      >
        Clear completed
      </button>
    </footer>
  );
};

Footer.defaultProps = {
  itemsLeftCount: 0,
  filterTasks: "all",
  onFilterTasks: () => {},
  completedTask: [],
  onClearCompletedTasks: () => {},
};

Footer.propTypes = {
  itemsLeftCount: PropTypes.number,
  filterTasks: PropTypes.string,
  onFilterTasks: PropTypes.func,
  completedTask: PropTypes.array,
  onClearCompletedTasks: PropTypes.func,
};
export default Footer;
