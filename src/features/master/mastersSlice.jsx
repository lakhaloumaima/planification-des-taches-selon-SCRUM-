import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Register } from "./mastersAPI";

const initialState = {
  master : null ,
 registration: {
    registerstatus: "",
    error: "",
  },
 // registration :"" ,
  masters :[],
};

// redux register master  action
export const registermaster = createAsyncThunk(
  "singup",
  async (data) => {
    const response = await Register(data);
    return response;
  }
);



export const mastersSlice = createSlice({
  name: "masters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(registermaster.pending, (state, action) => {
      console.log(action.payload);
      //state.registration = action.payload.data;
    });

    builder.addCase(registermaster.fulfilled, (state, action) => {
      console.log(action.payload);
      
      state.registration = action.payload.data;
    });
  
 /*
    [registermaster.pending]: (state, action) => {
      state.authstatus = "loading";
    },
    [registermaster.fulfilled]: (state, action) => {
      console.log(action.payload.response);

      if (action.payload.status === 200) {
        state.registration = "success";
      } else {
        const { data } = action.payload.response;
        state.registration = "failure";
       // state.registration.error = data.message;
      }
    },
    [registermaster.rejected]: (state, action) => {
      state.authstatus = "faiFlure";
    },
*/
  
  },
});

export const {} = mastersSlice.actions;

//selector
export const selectregistration = (state) => state.masters.registration;
export const selectregistrationstatus = (state) => state.masters.registration.registerstatus;
//export const selectaddstatus = (state) => state.masters.master;

export default mastersSlice.reducer;
