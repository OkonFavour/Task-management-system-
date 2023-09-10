import React, { useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import EmptyState from './components/EmptyState';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, {...newTask, id: Date.now()}]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  console.log(tasks)

  return (
    <div className="App">
      <h1>Task Management App</h1>
      <AddTask addTask={addTask} />
      {tasks.length === 0 ? (
        <EmptyState />
      ) : (
        <TaskList tasks={tasks} deleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;