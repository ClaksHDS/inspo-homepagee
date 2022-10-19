import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
/* Styles */
import Wrapper from "../assets/wrappers/taskForm";

const TasksForm = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        task: newTask,
      })
    );
    setNewTask("");
  };
  return (
    <Wrapper>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label for='task' className='form-label'>
            What's up today ?
          </label>
          <input
            type='text'
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
