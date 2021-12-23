import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, DeleteDev, GetAll, GetDeveloppers, Update, UpdateImage } from "./developperAPI";

const initialState = {
  developpers: [],
  
  addstatus: "",
  deletestatus: "",
  datachanged: "",
};

//craete developper
export const createdevelopper = createAsyncThunk(
  "developpers/create",
  async (data) => {
    console.log(data);
    const response = await Create(data);
    return response.data;
  }
);

//get all  developpers
export const getdeveloppers = createAsyncThunk("getuser", async () => {
  const response = await GetDeveloppers();
  return response.data;
});

//update developper by id
export const updatedevelopper = createAsyncThunk("developpers/update/id", async (data) => {
  const response = await Update(data);
  return response.data;
});

//update developper by id
/*  export const updateproductimage = createAsyncThunk("developpers/image/id", async (data) => {
  const response = await UpdateImage(data);
  return response.data;
});  */

//delete developper by id
export const deletedevelopper = createAsyncThunk(
  "developpers/delete/id",
  async (id) => {
    const response = await DeleteDev(id);
    return response.data;
  }
);
export const developpersSlice = createSlice({
  name: "developpers",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(createdevelopper.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(createdevelopper.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";
    });

    builder.addCase(getdeveloppers.fulfilled, (state, action) => {
      console.log(action.payload);
      // state.developpers = action.payload.data;
      
    });

    builder.addCase(updatedevelopper.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(updatedevelopper.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";

    });

 /*   builder.addCase(updateproductimage.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(updateproductimage.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";
    });
*/
    builder.addCase(deletedevelopper.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });

    builder.addCase(deletedevelopper.fulfilled, (state, action) => {
      console.log(action.payload);
      state.addstatus = "success";

    });
  },
});

export const { } = developpersSlice.actions;

export const selectdeveloppers = (state) => state.developpers.developpers;
export const selectaddstatus = (state) => state.developpers.addstatus;
export const selectdeletestatus = (state) => state.developpers.deletestatus;

export default developpersSlice.reducer;
