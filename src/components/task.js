import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const Task = (props) => {
  const result = formatDistanceToNow(props.created, { includeSeconds: true });

  return (
    <li className={props.class}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{props.task}</span>
          <span className="created">created {result} ago</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};

export default Task;
