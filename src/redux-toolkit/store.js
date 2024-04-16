import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/userSlice";

const store = configureStore({ reducer: counterReducer });

export default store;
