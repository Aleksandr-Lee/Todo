import React from 'react';
import Header from './Header';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import Footer from './Footer';
import buttonsFilter from './buttonsFilter';
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
        //     timer: 120,
        //   },
        //  {
        //    id: 2,
        //    task: 'Editing task',
        //    completed: false,
        //    editing: false,
        //    checked: ('checked', false),
        //    created: new Date() - 10000,
        //  },
        //  {
        //    id: 3,
        //    task: 'Active task',
        //    completed: false,
        //    editing: false,
        //    checked: ('checked', false),
        //    created: new Date() - 1,
        //  },
      ],
      filterTasks: buttonsFilter[0].name,
    };
  }

  onCompletedTask = (id) => {
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

  deletTask = (id) => {
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

  editingTask = (text, id) => {
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

  addTask = (text) => {
    const newTask = {
      id: (this.newId += 1),
      task: text,
      completed: false,
      editing: false,
      created: Date.now(),
      timer: 0,
    };
    this.setState((state) => {
      const newArray = [...state.tasks, newTask];
      return {
        tasks: newArray,
      };
    });
  };

  timeTask = (id, time) => {
    this.setState((state) => {
      const idx = state.tasks.findIndex((el) => el.id === id);
      if (state.tasks[idx] === undefined) {
        return [];
      }

      const newTask = {
        ...state.tasks[idx],
        timer: time,
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

  filterTasks = (tasks, filterTasks) => {
    switch (filterTasks) {
      case buttonsFilter[0].name:
        return tasks;
      case buttonsFilter[1].name:
        return tasks.filter((el) => !el.completed);
      case buttonsFilter[2].name:
        return tasks.filter((el) => el.completed);
      default:
        return tasks;
    }
  };

  onFilterTasks = (filterTasks) => {
    this.setState({
      filterTasks,
    });
  };

  clearCompletedTasks = () => {
    this.setState((state) => {
      const newArr = state.tasks.filter((el) => !el.completed);
      return {
        tasks: newArr,
      };
    });
  };

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
          timeTask={this.timeTask}
        />
        <Footer
          filter={this.filter}
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
