import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";
import { selectTasks } from "../features/tasks/taskSlice";
/* Styles */
import Wrapper from "../assets/wrappers/taskList";

const TasksList = () => {
  let tasks = useSelector(selectTasks);

  // restoring tasks from local storage
  //const savedTasks = localStorage.getItem("tasks");

  // save new tasks into local storage
  /* React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // add tasks as a dependency to update the local storage anytime we add a new task
  }, [tasks]);

  React.useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
  }, []); */

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
