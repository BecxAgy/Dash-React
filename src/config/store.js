import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../slice/doctorSlice";

export default configureStore({
  reducer: {
    doctor: doctorReducer,
  },
});
