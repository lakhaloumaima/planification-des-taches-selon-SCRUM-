import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Create, DeletePro, DeleteTache, GetProjects, UpdateTache } from "./projectAPI";


const initialState = {
  project: null,
  addstatus: "",
  projects: [],
  datachanged:"",
  deletestatus : "" ,
  
};
//delete user by id
export const deletetache = createAsyncThunk("delltache", async (id) => {
  const response = await DeleteTache(id);
  return response.data;
});

//create project
export const createproject = createAsyncThunk( "/projectupdate" , async (data) => {
    console.log(data);
    const response = await Create(data);
    return response.data;
}

);

//get all users
export const getprojects = createAsyncThunk("getproject", async () => {
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

//update user  by id
export const updatetache = createAsyncThunk("tacheedit", async (dataa) => {
  const response = await UpdateTache(dataa);
  return response.dataa;
});
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
  builder.addCase(updatetache.pending, (state, action) => {
    console.log(action.payload);
    
  });
  builder.addCase(updatetache.fulfilled, (state, action) => {
    console.log(action.payload.dataa);
    state.project = action.payload.dataa;

  });

  },
   
});

export const {  } = projectsSlice.actions;

export const selectprojects = (state) => state.projects.projects;
export const selectaddstatus = (state) => state.projects.addstatus;
export const selectdatachanged = (state) => state.projects.datachanged;
export const selectseletestatus = (state) => state.projects.deletestatus; 
export const selectauthedproject = (state) => state.projects.project;

export default projectsSlice.reducer;
