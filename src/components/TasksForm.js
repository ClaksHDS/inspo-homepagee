import React from "react";

const TasksForm = () => {
  return (
    <form>
      <div className='form-row'>
        <label for='task' className='form-label'>
          What's up today ?
        </label>
        <input
          type='text'
          placeholder='write a new task'
          id='task'
          className='form-input'
        />
      </div>
    </form>
  );
};

export default TasksForm;
