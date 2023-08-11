import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "Chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessge: (state, action) => {
      state.message.unshift(action.payload);
    },
  },
});
export const { addMessge } = chatSlice.actions;
export default chatSlice.reducer;
