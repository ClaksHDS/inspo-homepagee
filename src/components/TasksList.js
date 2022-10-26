import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTasks } from "../features/tasks/taskSlice";
/* Styles */
import Wrapper from "../assets/wrappers/taskList";

const TasksList = () => {
  let tasks = useSelector(selectTasks);

  // save each tasks and changes into local storage
  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Wrapper>
      {tasks.length > 0 && (
        <div className='tasks-list'>
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
        </div>
      )}
    </Wrapper>
  );
};

export default TasksList;
