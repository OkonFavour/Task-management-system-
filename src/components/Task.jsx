import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <span>{task.name} (Due: {task.dueDate})</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;