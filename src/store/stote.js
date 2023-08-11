import { configureStore } from "@reduxjs/toolkit";
import chatSlice from "../slices/chatSlice"
const store = configureStore({
    reducer:{
        Chat: chatSlice,
    }
})
export default store;