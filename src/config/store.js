import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "../slice/doctorSlice";
import patientReducer from "../slice/patientSlice";

export default configureStore({
  reducer: {
    doctor: doctorReducer,
    patient: patientReducer,
  },
});
