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
    removeMessage:(state, action) =>{
      state.message = action.payload;
    }
  },
});
export const { addMessge, removeMessage } = chatSlice.actions;
export default chatSlice.reducer;
