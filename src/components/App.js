import { Component } from "react";
import Task from "./Task/Task";
import TaskInput from "./TaskInput/TaskInput";
import store from "../store";
import { observer } from "mobx-react";
import "./App.scss";

class App extends Component {
  render() {
    const { sortedTask, activeTasks } = store;

    return (
      <div className="App">
        <h1>Список задач</h1>
        <h2 className="title">Активных задач: {activeTasks}</h2>
        <TaskInput addTask={(v) => store.addTasks(v)} />
        <div className="tasks">
          {sortedTask.map((task) => (
            <Task handleTask={() => store.handleTask(task.id)} deleteTask={() => store.deleteTask(task.id)} task={task} key={task.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default observer(App);
