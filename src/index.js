import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autofocus
      />
    </header>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
