import React from "react";
import PropTypes from "prop-types";

class TaskFilter extends React.Component {
  buttons = [
    { name: "all", text: "All" },
    { name: "active", text: "Active" },
    { name: "completed", text: "Completed" },
  ];
  render() {
    const { filterTasks, onFilterTasks } = this.props;
    const buttons = this.buttons.map(({name, text}) => {
      const isActive = filterTasks === name;
      const classBtn = isActive ? "selected" : "";
      return (
        <li key={name}>
          <button className={classBtn} onClick={() => onFilterTasks(name)}>
            {text}
          </button>
        </li>
      );
    });
    return <ul className="filters">{buttons}</ul>;
  }
}
TaskFilter.defaultProps = {
  filterTasks: "all",
  onFilterTasks: () => {},
};

TaskFilter.propTypes = {
  filterTasks: PropTypes.string,
  onFilterTasks: PropTypes.func,
};

export default TaskFilter;
