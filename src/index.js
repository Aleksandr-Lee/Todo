import React from "react";
import ReactDOM from "react-dom";

import Header from "../src/components/header";
import Task from "../src/components/task";

import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Task />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
