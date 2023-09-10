import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddTask = ({ addTask }) => {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = e => {
      e.preventDefault();
      if (name && dueDate) {
        addTask({ name, dueDate });
          setName('');
          setDueDate('');
      }
  };

  return (
      <div className='form'>
          <div>
              <h1>Add Task</h1>
              <form onSubmit={handleSubmit}>
                  <input
                      type="text"
                      placeholder="Task name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                  />
                  <input
                      type='date'
                      value={dueDate}
                      onChange={e => setDueDate(e.target.value)}
                      style={{ padding: '9px', margin: '0 5px' }}
                  />
                  <div className='btn-div'>
                      <button className='btn-add' type="submit">Add Task</button>
                  </div>
              </form>
          </div>
      </div>

  );
};
export default AddTask;