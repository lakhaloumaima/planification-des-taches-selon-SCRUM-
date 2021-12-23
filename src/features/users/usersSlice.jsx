import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, GetUsers, DeletetUser, UpdateUser } from "./usersAPI";

const initialState = {
  user: null,
  filtredusers: [],
  isauth: false,
  autherror: {
    iserror: false,
    message: "",
  },
  authstatus: "",
  users: [],
  deletestatus: "",
  addstatus: "",
};

//login user
export const login = createAsyncThunk("login", async (data) => {
  const response = await Login(data);
  return response.data;
});

//get all users
export const getusers = createAsyncThunk("getuser", async (data) => {
  const response = await GetUsers(data);
  console.log("users : " +response.data)
  return response.data;
});

//delete user by id
export const deleteuser = createAsyncThunk("users/delete/id", async (id) => {
  const response = await DeletetUser(id);
  return response.data;
});

//get me
/* export const getme = createAsyncThunk("users/me", async () => {
  const response = await GetMe();
  return response.data;
}); */


//update user  by id
export const updateuser = createAsyncThunk("users/update", async (data) => {
  const response = await UpdateUser(data);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    filtredusers : (state, action) => {
      if (action.payload.id === "all") {
        state.filtredusers = state.users;
      } else if (action.payload.id === "developper") {
        let arr = [...state.users];
        console.log(action.payload.id);
        let data = arr.filter((p) => p.developper._id === action.payload.id);

        state.filtredusers = data;
      }
    },

    logout : (state,action) => {
      state.user = null
      state.isauth = false
      state.authstatus = ""
      localStorage.clear()
      window.location.href = '/'    
    }
  },

  extraReducers: (builder) => {
   

    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload);
      // Add user to the state array
      if (action.payload) {
        localStorage.setItem("token", action.payload.token);
        state.isauth = true;
        state.user = action.payload.user
        state.autherror.iserror = false;
        state.autherror.message = "";
        state.authstatus = "success";
      } else {
        state.autherror.iserror = true;
        state.autherror.message = 'invalid credantials';
      }
    
    });


    builder.addCase(getusers.pending, (state, action) => {
      console.log(action.payload);
      //state.projects = action.payload.data;
    });
    builder.addCase(getusers.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.users = action.payload.data;
    });



    builder.addCase(deleteuser.pending, (state, action) => {
      state.deletestatus = "loading";
    });

    builder.addCase(deleteuser.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload.status === 200) {
        state.deletestatus = "success";
      } else {
        state.deletestatus = "failure";
      }
    });

///////////////////////////getme
  /*  builder.addCase(getme.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data
    });
  */

    /////////updateuser
    builder.addCase(updateuser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.user = action.payload.data;

    });
  },
   
});

export const { logout , filtredusers } = usersSlice.actions;


export const selectuserss = (state) => state.users.filtredusers;


//export const selectusers = (state) => state.users.users;
export const selectusers = (state) => state.users.users;
export const selectautheduser = (state) => state.users.user;
export const selectauthstatus = (state) => state.users.authstatus;
export const selectautherror = (state) => state.users.autherror;
export const selectisauth = (state) => state.users.isauth;
export const selectseletestatus = (state) => state.users.deletestatus;


export default usersSlice.reducer;
