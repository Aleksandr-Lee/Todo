import React from 'react';

import Header from './header';
import NewTaskForm from './new-task-form';
import TaskList from './task-list';
import Footer from './footer';
import '../index.css';

class App extends React.Component {
  constructor() {
    super();

    this.newId = 100;

    this.state = {
      tasks: [
        //   {
        //     id: 1,
        //     task: 'Completed task',
        //     completed: false,
        //     editing: false,
        //     checked: ('checked', false),
        //     created: new Date() - 1020000,
        //   },
        //   {
        //     id: 2,
        //     task: 'Editing task',
        //     completed: false,
        //     editing: false,
        //     checked: ('checked', false),
        //     created: new Date() - 10000,
        //   },
        //   {
        //     id: 3,
        //     task: 'Active task',
        //     completed: false,
        //     editing: false,
        //     checked: ('checked', false),
        //     created: new Date() - 1,
        //   },
      ],
      filterTasks: 'all',
    };

    this.onCompletedTask = (id) => {
      this.setState((state) => {
        const idx = state.tasks.findIndex((el) => el.id === id);
        const oldTask = state.tasks[idx];
        const newTask = {
          ...oldTask,
          checked: !oldTask.checked,
          completed: !oldTask.completed,
        };
        const newArray = [
          ...state.tasks.slice(0, idx),
          newTask,
          ...state.tasks.slice(idx + 1),
        ];
        return {
          tasks: newArray,
        };
      });
    };

    this.deletTask = (id) => {
      this.setState((state) => {
        const idx = state.tasks.findIndex((el) => el.id === id);
        const newArray = [
          ...state.tasks.slice(0, idx),
          ...state.tasks.slice(idx + 1),
        ];
        return {
          tasks: newArray,
        };
      });
    };
    this.editingTask = (text, id) => {
      const { tasks } = this.state;
      const editedTaskList = tasks.map((item) => {
        if (id === item.id) {
          item.task = text;
          item.editing = !item.editing;
        }
        return [];
      });
      this.setState(() => {
        const newArray = editedTaskList;
        return {
          newArray,
        };
      });
    };

    this.addTask = (text) => {
      const newTask = {
        id: this.newId + 1,
        task: text,
        completed: false,
        editing: false,
        checked: ('checked', false),
        created: new Date() - 1,
      };
      this.setState((state) => {
        const newArray = [...state.tasks, newTask];
        return {
          tasks: newArray,
        };
      });
    };

    this.filterTasks = (tasks, filterTasks) => {
      switch (filterTasks) {
        case 'all':
          return tasks;
        case 'active':
          return tasks.filter((el) => !el.completed);
        case 'completed':
          return tasks.filter((el) => el.completed);
        default:
          return tasks;
      }
    };

    this.onFilterTasks = (filterTasks) => {
      this.setState({
        filterTasks,
      });
    };

    this.clearCompletedTasks = () => {
      this.setState((state) => {
        const newArr = state.tasks.filter((el) => !el.completed);
        return {
          tasks: newArr,
        };
      });
    };
  }

  render() {
    const { tasks, filterTasks } = this.state;
    const itemsLeftCount = tasks.filter((el) => !el.completed).length;
    const completedTask = tasks.filter((el) => el.completed);
    const filterArr = this.filterTasks(tasks, filterTasks);

    return (
      <div>
        <Header />
        <NewTaskForm onAddTask={this.addTask} />
        <TaskList
          task={filterArr}
          onDeletTask={this.deletTask}
          editingTask={this.editingTask}
          onCompletedTask={this.onCompletedTask}
        />
        <Footer
          itemsLeftCount={itemsLeftCount}
          filterTasks={filterTasks}
          onFilterTasks={this.onFilterTasks}
          completedTask={completedTask}
          onClearCompletedTasks={this.clearCompletedTasks}
        />
      </div>
    );
  }
}

export default App;
