import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { GetTaches , Create, DeletetTache, GetTacheBydeveloper, UpdateTache} from "./tachesAPI";


const initialState = {
  tache: 0 ,
  taches: [],
  deletestatus : "" ,
  tachesdev : [],
  addtaches :""

};
//update user  by id
export const updatetache = createAsyncThunk("tacheedit", async (data) => {
  const response = await UpdateTache(data);
  return response.dataa;
});

//get all users
export const gettaches = createAsyncThunk("onetache", async (data) => {
  const response = await GetTaches(data);
  console.log("tache : " + response.data)
  return response.data;
});
//get all users
export const gettachebydeveloper = createAsyncThunk("gettachebydeveloper", async (data) => {
  const response = await GetTacheBydeveloper(data);
  console.log("tache by developer : " + response.data)
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
    builder.addCase(gettachebydeveloper.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.tache = action.payload.data;
      //state.tachesdev = action.payload.data;
    });

  builder.addCase(createtache.pending, (state, action) => {
    console.log(action.payload);
    state.addtaches = "failure" ;
  });
  builder.addCase(createtache.fulfilled, (state, action) => {
    console.log(action.payload);
    state.addtaches = "success" ;
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
/*
  builder.addCase(updatetaches.fulfilled, (state, action) => {
    console.log(action.payload.data);
    state.tache = action.payload.data;

  });
  */
 /////////updateuser
builder.addCase(updatetache.fulfilled, (state, action) => {
  console.log(action.payload);
  state.taches = action.payload ;
 // state.tache = action.payload.tache;

});

  },
   
});

export const {  } =tachesSlice.actions;

export const selecttachess = (state) => state.taches.taches;
export const selectseletestatus = (state) => state.taches.deletestatus;
export const selectauthedtaches = (state) => state.taches.tache;
export const selecttache = (state) => state.taches.tache;
export const selectaddtaches = (state) => state.taches.addtaches;

export const selecttachedev = (state) => state.taches.tachesdev;

export default tachesSlice.reducer;
