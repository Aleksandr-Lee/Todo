import React from "react";

const Task = (props) => {
  return (
    <li className={props.class}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{props.task}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
