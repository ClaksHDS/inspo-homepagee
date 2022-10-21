import React from "react";
import { completeTask, deleteTask } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";
/* React Icons */
import { FiCheckCircle, FiTrash2 } from "react-icons/fi";
/* Styles */
import Wrapper from "../assets/wrappers/taskItem";

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

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

  return (
    <Wrapper>
      <li>
        <div className='task-item' style={styles.taskCompleted}>
          {title}
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
