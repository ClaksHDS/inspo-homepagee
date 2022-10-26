import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";

/* Styles */
import Wrapper from "../assets/wrappers/taskForm";

const TasksForm = () => {
  const dispatch = useDispatch();
  // dispatch the input to the state containing the tasks
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim().length === 0) {
      alert("Write a task");
      setNewTask("");
      return;
    }
    dispatch(addTask({ title: newTask }));
    // set new task back to empty string once we submit one task
    setNewTask("");
  };

  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor='task' className='form-label'>
            What's up today ?
          </label>
          <input
            type='text'
            aria-label='Write, modify, delete or mark you task as completed'
            placeholder='Write a new task'
            id='task'
            className='form-input'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default TasksForm;
