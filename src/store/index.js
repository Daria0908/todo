import { makeObservable, observable, computed } from "mobx";

class Store {
  constructor() {
    makeObservable(this, {
      tasks: observable,
      activeTasks: computed,
      sortedTask: computed,
    });
  }
  tasks = [];

  setTask(payload) {
    this.tasks = payload;
  }

  get activeTasks() {
    return this.tasks.filter((task) => !task.done).length;
  }

  get sortedTask() {
    return this.tasks.slice().sort((a, b) => (a.done === b.done ? 0 : a.done ? 1 : -1));
  }

  addTasks(task) {
    let tasks = this.tasks;
    tasks.push({
      id: tasks.length || 0,
      title: task,
      done: false,
    });
    this.setTask(tasks);
  }

  handleTask(id) {
    let tasks = this.tasks;
    const index = tasks?.map((task) => task.id).indexOf(id);
    tasks[index].done = !tasks[index].done;
    this.setTask(tasks);
  }

  deleteTask(id) {
    this.setTask(this.tasks.filter((item) => item.id !== id));
  }
}

export default new Store();
