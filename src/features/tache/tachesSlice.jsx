import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetTaches } from "./tachesAPI";


const initialState = {
  tache: null,
  
  taches: [],
  
};


//get all users
export const gettaches = createAsyncThunk("gettaches", async () => {
  console.log();
  const response = await GetTaches();
  console.log(response.data);
  return response.data;
});


//get me
/* export const getme = createAsyncThunk("users/me", async () => {
  const response = await GetMe();
  return response.data;
}); */


export const tachesSlice = createSlice({
  name: "taches",
  initialState,
  reducers: { },

  extraReducers: (builder) => {

    /*
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getprojects.fulfilled, (state, action) => {
      // Add user to the state array
      state.projects = action.payload.data;
    });
*/
builder.addCase(gettaches.pending, (state, action) => {
    console.log(action.payload);
  
  });
  builder.addCase(gettaches.fulfilled, (state, action) => {
    console.log(action.payload);
    state.taches = action.payload.data;
  });



  },
   
});

export const {  } =tachesSlice.actions;

export const selecttachess = (state) => state.taches.taches;



export default tachesSlice.reducer;
