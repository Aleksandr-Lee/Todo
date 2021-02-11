import React from "react";
import ReactDOM from "react-dom";

import Header from "../src/components/header";
import TaskList from "./components/task-list";
import Footer from "../src/components/footer";

import "./index.css";

const App = () => {
  const tasks = [
    { id: 1, task: "Completed task", class: "completed" },
    { id: 2, task: "Editing task", class: "editing" },
    { id: 3, task: "Active task", class: "" }
  ];
  return (
    <div>
      <Header />
      <TaskList task={tasks} />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
