import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      let newTask = {
        id: new Date().getTime().toString(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTask);
    },
    completeTask: (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },
  },
});

export const selectTasks = (state) => state.task;
export const { addTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
