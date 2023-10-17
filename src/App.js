import { Component } from "react";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import store from "./store";
import { observer } from "mobx-react";
class App extends Component {
  render() {
    const { sortedTask, activeTasks } = store;

    return (
      <div className="App">
        <h1>Active tasks: {activeTasks}</h1>

        {sortedTask.map((task) => (
          <Task doneTask={() => store.doneTask(task.id)} deleteTask={() => store.deleteTask(task.id)} task={task} key={task.id} />
        ))}
        <TaskInput addTask={(v) => store.addTasks(v)}></TaskInput>
      </div>
    );
  }
}

export default observer(App);
