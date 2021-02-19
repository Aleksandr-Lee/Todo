import React from "react";

class TaskFilter extends React.Component {
  constructor(props) {
    super(props);
  }
  buttons = [
    { name: "all", text: "All" },
    { name: "active", text: "Active" },
    { name: "completed", text: "Completed" },
  ];
  render() {
    const buttons = this.buttons.map((item) => {
      const isActive = this.props.filterTasks === item.name;
      const classBtn = isActive ? "selected" : "";
      return (
        <li key={item.name}>
          <button
            className={classBtn}
            onClick={() => this.props.onFilterTasks(item.name)}
          >
            {item.text}
          </button>
        </li>
      );
    });
    return (
      <ul className="filters">
        {buttons}
        {/* <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li> */}
      </ul>
    );
  }
}

export default TaskFilter;
