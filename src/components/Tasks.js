import React from "react";
import TasksForm from "./TasksForm";
import TasksList from "./TasksList";

const Tasks = ({ title }) => {
  return (
    <section className='tasks-wrapper'>
      <TasksForm />
      <TasksList />
    </section>
  );
};

export default Tasks;
