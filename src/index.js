import React from "react";
import ReactDOM from "react-dom";

import Header from "../src/components/header";
import Task from "./components/task";
import Footer from '../src/components/footer'

import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Task />
		<Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
