import React from "react";
import ReactDOM from "react-dom";

import Header from "../src/components/header";
import TaskList from "./components/task-list";
import Footer from '../src/components/footer'

import "./index.css";

const App = () => {
	// const todoData = [
	// 	{label: 'Completed task'}
	// 	{label: 'Editing task'}
	// 	{label: 'Active task'}
	// ]
  return (
    <div>
      <Header />
      <TaskList />
		<Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
