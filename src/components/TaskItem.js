import React, { useRef, useEffect } from "react";
import {
  completeTask,
  deleteTask,
  editTask,
} from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";
/* React Icons */
import { FiCheckCircle, FiTrash2, FiEdit } from "react-icons/fi";
/* Styles */
import Wrapper from "../assets/wrappers/taskItem";

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  // add styles once a task is marked as complete
  const styles = {
    taskCompleted: {
      textDecoration: completed ? "line-through" : "none",
    },
  };

  const markTaskCompleted = () => {
    dispatch(
      completeTask({
        id: id,
        completed: !completed,
      })
    );
  };

  const markTaskDeleted = () => {
    dispatch(deleteTask({ id: id }));
  };

  // a reference connected with text-area
  const inputRef = useRef(true);

  // will enable text-area and focus on it, connected to the edit btn
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };
  // update the value of the selected task and it listens for a key press event
  const updateTask = (id, value, e) => {
    if (e.which === 13) {
      editTask({ id, title: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <Wrapper>
      <li>
        <div className='task-item'>
          <textarea
            className='task'
            style={styles.taskCompleted}
            ref={inputRef}
            disabled={inputRef}
            defaultValue={title}
            onKeyPress={(e) =>
              updateTask(title.id, inputRef.current.valueOf, e)
            }
          />

          <div className='btn-container'>
            <button
              type='button'
              title='Mark task as completed'
              aria-label='Mark the task as completed'
              onClick={() => markTaskCompleted()}
            >
              <FiCheckCircle />
            </button>
            <button
              type='button'
              title='Edit this task'
              aria-label='Edit and change this task'
              onClick={() => changeFocus()}
            >
              <FiEdit />
            </button>
            <button
              type='button'
              title='Delete task'
              aria-label='Delete the task'
              onClick={() => markTaskDeleted()}
            >
              <FiTrash2 />
            </button>
          </div>
        </div>
      </li>
    </Wrapper>
  );
};

export default TaskItem;
