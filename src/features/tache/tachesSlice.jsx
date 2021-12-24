import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { GetTaches , Create, DeletetTache, UpdateTaches} from "./tachesAPI";


const initialState = {
  tache: 0 ,
  taches: [],
  deletestatus : "" ,

};
//get all users
export const gettaches = createAsyncThunk("onetache", async (data) => {
  const response = await GetTaches(data);
  console.log("tache : " +response.data)
  return response.data;
});



//get all users
export const createtache = createAsyncThunk("tacheupdate", async (data) => {
  console.log(data);
  const response = await Create(data);
  console.log(response.data);
  return response.data;
});
//delete user by id
export const deletetache = createAsyncThunk("delltache", async (id) => {
  const response = await DeletetTache(id);
  return response.data;
});
//update user  by id
export const updatetaches = createAsyncThunk("tacheedit", async (data) => {
  console.log(response.data) ;
  const response = await UpdateTaches(data);
  console.log(response.data) ;
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

   
    builder.addCase(gettaches.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.tache = action.payload.data;
    });

  builder.addCase(createtache.pending, (state, action) => {
    console.log(action.payload);
  
  });
  builder.addCase(createtache.fulfilled, (state, action) => {
    console.log(action.payload);
    state.taches = action.payload.data;
  });

  builder.addCase(deletetache.pending, (state, action) => {
    state.deletestatus = "loading";
  });

  builder.addCase(deletetache.fulfilled, (state, action) => {
    console.log(action.payload);
    if (action.payload.status === 200) {
      state.deletestatus = "success";
    } else {
      state.deletestatus = "failure";
    }
  });

  /////////updateuser
  builder.addCase(updatetaches.pending, (state, action) => {
    console.log(action.payload);
    
  });
  builder.addCase(updatetaches.fulfilled, (state, action) => {
    console.log(action.payload.data);
    state.tache = action.payload.data;

  });

  },
   
});

export const {  } =tachesSlice.actions;

export const selecttachess = (state) => state.taches.taches;
export const selectseletestatus = (state) => state.taches.deletestatus;
export const selectauthedtaches = (state) => state.taches.tache;

export default tachesSlice.reducer;
