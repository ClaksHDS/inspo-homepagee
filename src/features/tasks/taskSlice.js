import { createSlice } from "@reduxjs/toolkit";

const tasks =
  localStorage.getItem("tasks") !== null
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

const taskSlice = createSlice({
  name: "task",
  initialState: tasks,
  reducers: {
    // add a new task
    addTask: (state, action) => {
      let newTask = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    // mark a task as completed
    completeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    // delete a specific task
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
    // edit a specific task
    editTask: (state, action) => {
      state.map((editedTask) => {
        if (editedTask.id === action.payload.id) {
          return {
            ...editedTask,
            title: action.payload.title,
          };
        }
        return editedTask;
      });
    },
  },
});

export const selectTasks = (state) => state.task;
export const { addTask, completeTask, deleteTask, editTask } =
  taskSlice.actions;
export default taskSlice.reducer;
