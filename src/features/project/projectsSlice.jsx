import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, DeletePro, GetProjects } from "./projectAPI";


const initialState = {
  project: null,
  addstatus: "",
  projects: [],
  datachanged:"",
  
};

//create project
export const createproject = createAsyncThunk( "/projectupdate" , async (data) => {
    console.log(data);
    const response = await Create(data);
    return response.data;
}

);

//get all users
export const getprojects = createAsyncThunk("getuser", async () => {
  const response = await GetProjects();
  console.log(response.data);
  return response.data;
});

//delete project by id
export const deleteproject = createAsyncThunk(
  "dellproject",
  async () => {
    const response = await DeletePro();
    console.log("deleted " + response.data);
    return response.data;
  }
);
//get me
/* export const getme = createAsyncThunk("users/me", async () => {
  const response = await GetMe();
  return response.data;
}); */


export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: { },

  extraReducers: (builder) => {

    builder.addCase(createproject.pending, (state, action) => {
      console.log(action.payload);
      state.addstatus = "loading";
    });
  
    builder.addCase(createproject.fulfilled, (state, action) => {
      console.log(action.payload);
      //state.projects = action.payload.data;
      state.addstatus = "success";
    });
    
builder.addCase(getprojects.pending, (state, action) => {
    console.log(action.payload);
    //state.projects = action.payload.data;
  });
  builder.addCase(getprojects.fulfilled, (state, action) => {
    console.log(action.payload);
    state.projects = action.payload.data;
  });
  //////////////////////////// delete 
  builder.addCase(deleteproject.pending, (state, action) => {
    console.log(action.payload);
    
  });
  builder.addCase(deleteproject.fulfilled, (state, action) => {
    console.log(action.payload);
   state.datachanged = action.payload.data;
  });
  


  },
   
});

export const {  } = projectsSlice.actions;

export const selectprojects = (state) => state.projects.projects;
export const selectaddstatus = (state) => state.projects.addstatus;
export const selectdatachanged = (state) => state.projects.datachanged;

export default projectsSlice.reducer;
