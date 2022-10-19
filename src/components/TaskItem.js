import React from "react";
import { completeTask, deleteTask } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";
/* React Icons */
import { FiCheckCircle, FiTrash2 } from "react-icons/fi";

const TaskItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const markTaskCompleted = () => {
    dispatch(completeTask({ id: id, completed: !completed }));
  };

  const markTaskDeleted = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <li>
      <div>
        {title}
        <div className='btn-container'>
          <button type='button' onClick={() => markTaskCompleted()}>
            <FiCheckCircle />
          </button>
          <button type='button' onClick={() => markTaskDeleted()}>
            <FiTrash2 />
          </button>
        </div>
      </div>
    </li>
  );
};

export default TaskItem;
