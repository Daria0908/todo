import React from "react";

const Task = ({ task, ...props }) => {
  const ActionBtn = () => <div>{task.done ? <p onClick={props.deleteTask}>done</p> : <p onClick={props.doneTask}>no done</p>}</div>;

  return (
    <div>
      <p>{task.title}</p>

      <ActionBtn></ActionBtn>
    </div>
  );
};

export default Task;
