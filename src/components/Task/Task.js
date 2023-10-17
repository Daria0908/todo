import React from "react";
import "./Task.scss";

const Task = ({ task, ...props }) => {
  const ActionBtn = () => <div className="task__done">{task.done ? <p onClick={props.handleTask}>✅</p> : <p onClick={props.handleTask}>✘</p>}</div>;
  const DeleteBtn = () => <div onClick={props.deleteTask}>Удалить задачу</div>;

  const className = "task" + ` ${task.done ? "done" : ""}`;

  return (
    <div className={className}>
      <ActionBtn />
      <p>{task.title}</p>
      <DeleteBtn />
    </div>
  );
};

export default Task;
