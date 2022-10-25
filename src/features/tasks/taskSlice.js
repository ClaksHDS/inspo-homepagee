import { createSlice } from "@reduxjs/toolkit";

// store the tasks in the local storage so the user can refresh or close the page and still view his/her tasks
const getLocalStorage = () => {
  let tasks = localStorage.getItem("tasksList");
  if (tasks) {
    return (tasks = JSON.parse(localStorage.getItem("tasksList")));
  } else {
    return [];
  }
};

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    // add a new task
    addTask: (state, action) => {
      let newTask = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
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
