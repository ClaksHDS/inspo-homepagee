import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          task: action.payload.text,
          completed: false,
        },
      ];
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

export const { addTask, completeTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
