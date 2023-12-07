import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import patientService from "../services/patientService";

const initialState = {
  patients: [],
  patient: {},
  error: false,
  success: false,
  loading: false,
  message: null,
};

//slice get
export const getPatients = createAsyncThunk("patient/get-all", async () => {
  const data = await patientService.getAlPatients();
  return data;
});

export const createPatient = createAsyncThunk(
  "patient/create",
  async (patient, thunkAPI) => {
    const data = await patientService.createPatient(patient);

    if (data.error) {
      return thunkAPI.rejectWithValue();
    }

    return data;
  }
);

export const deletePatient = createAsyncThunk(
  "patient/delete",
  async (id, thunkAPI) => {
    const data = await patientService.deletePatient(id);

    if (data.message) {
      return thunkAPI.rejectWithValue(data.message);
    }
    return data;
  }
);

export const updatePatient = createAsyncThunk(
  "patient/update",
  async (values, thunkAPI) => {
    // Destructure dos valores do objeto data

    debugger;
    const response = await patientService.updatePatient(values.id, values);

    return response;
  }
);

export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    resetMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPatients.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getPatients.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.patients = action.payload;
      })

      .addCase(createPatient.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(createPatient.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.patient = action.payload;
        //adicionando no primeiro lugar do array
        state.patients.unshift(state.patient);
        state.message = "!!";
      })
      .addCase(createPatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.patient = {};
      })
      .addCase(deletePatient.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deletePatient.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.patients = state.patients.filter((patient) => {
          //console.log(action.payload);
          return patient.id !== action.payload.id;
        });
        state.message = " !";
      })
      .addCase(deletePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.patient = {};
      })
      .addCase(updatePatient.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(updatePatient.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.error = null;
        state.patients = state.patients.map((sol) => {
          //tem que testar

          if (sol.id === action.payload.id) {
            return (sol = action.payload);
          }
          return sol;
        });
        state.message = " sucesso!";
      })
      .addCase(updatePatient.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.patient = {};
      });
  },
});

export const { resetMessage } = patientSlice.actions;
export default patientSlice.reducer;
