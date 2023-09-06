import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', dueDate: new Date() });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleDateChange = (date) => {
    setTask({ ...task, dueDate: date });
  };

  // const handleSubmit = () => {
  //   if (task.name && task.dueDate) {
  //     addTask({ ...task, id: Date.now() });
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name && task.dueDate) {
      addTask({ ...task, id: Date.now() });
    }
  };



  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Task name"
        value={task.name}
        onChange={handleInputChange}
      />
      <DatePicker
        selected={task.dueDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select due date"
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default AddTask;