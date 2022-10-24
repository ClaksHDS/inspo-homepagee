import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTasks } from "../features/tasks/taskSlice";
/* Styles */
import Wrapper from "../assets/wrappers/taskList";

const TasksList = () => {
  const tasks = useSelector(selectTasks);

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <ul className='tasks-list'>
          {tasks.map((task) => {
            return (
              <TaskItem
                id={task.id}
                key={task.id}
                title={task.title}
                completed={task.completed}
              />
            );
          })}
        </ul>
      )}
    </Wrapper>
  );
};

export default TasksList;
