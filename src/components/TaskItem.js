import React from "react";
import { completeTask, deleteTask } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";
/* React Icons */
import { FiCheckCircle, FiTrash2 } from "react-icons/fi";
/* Styles */
import Wrapper from "../assets/wrappers/taskItem";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const markTaskCompleted = () => {
    dispatch(completeTask({ id: id, completed: !completed }));
  };

  const markTaskDeleted = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <Wrapper>
      <li>
        <div className='task-item'>
          {title}
          <div className='btn-container'>
            <button
              type='button'
              title='Mark task as completed'
              onClick={() => markTaskCompleted()}
            >
              <FiCheckCircle />
            </button>
            <button
              type='button'
              title='Delete task'
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
