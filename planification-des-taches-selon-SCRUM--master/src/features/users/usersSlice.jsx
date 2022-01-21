import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, GetUsers, DeletetUser, UpdateUser, GetUserByemail } from "./usersAPI";

const initialState = {
  user: null,
  filtredusers: [],
  isauth: false,
 
  authstatus: "",
  autherror: {
    iserror: false,
    message: "",
  },
  authstatus: "",
  users: [],
  deletestatus: "",
  addstatus: "",
  datachanged : "" ,
};
//get user by id
export const getuser = createAsyncThunk("oneuser", async (data) => {
  const response = await GetUserByemail(data);
  console.log("user : " + response.data)
  return response.data;
});
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
export const deleteuser = createAsyncThunk("delluser", async (data) => {
  const response = await DeletetUser(data);
  console.log("delete" + response.data);
  return response.data;
});

//get me
/* export const getme = createAsyncThunk("users/me", async () => {
  const response = await GetMe();
  return response.data;
}); */


//update user  by id
export const updateuser = createAsyncThunk("useredit", async (data) => {
  const response = await UpdateUser(data);
  console.log('user updated : '  + response.data)
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
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
        // localStorage.setItem("email", action.payload.email);
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
    
    });
    builder.addCase(getusers.fulfilled, (state, action) => {
      console.log(action.payload.data);
      state.filtredusers = action.payload.data;
     // state.user = action.payload.user
    });

    builder.addCase(deleteuser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.datachanged = action.payload;
    //  state.user = action.payload.user
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
     state.datachanged = action.payload;
    // state.user = action.payload.user
    });

    builder.addCase(getuser.fulfilled, (state, action) => {
      console.log(action.payload);
     state.users = action.payload.data;
    // state.user = action.payload.user
    
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
export const selectdatachenged = (state) => state.users.datachanged;


export default usersSlice.reducer;
