import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import mastersReducer from '../features/master/mastersSlice' ;
import developpersReducer from '../features/developper/developpersSlice' ;

import projectsReducer from '../features/project/projectsSlice' ;
import tachesReducer from '../features/tache/tachesSlice' ;
import omit from "lodash/omit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import createTransform from "redux-persist/es/createTransform";

const reducers = combineReducers({
    
    users: usersReducer,
    //clients: clientsReducer,
    //admins:adminsReducer,

    projects : projectsReducer ,

    taches : tachesReducer ,

    masters : mastersReducer,
    developpers : developpersReducer ,
});
let usersBalcklist = createTransform((inboundstate, key) => {
  if (key === "users") {
    return omit(inboundstate, ["isauth", "authstatus"]);
  } else {
    return inboundstate;
  }
});

let usersauthstatus = createTransform((inboundstate, key) => {
  if (key === "users") {
    return omit(inboundstate, ["authstatus"]);
  } else {
    return inboundstate;
  }
});


let projectsauthstatus = createTransform((inboundstate, key) => {
  if (key === "projects") {
    return omit(inboundstate, ["addstatus", "authstatus"]);
  } else {
    return inboundstate;
  }
});
let tachesauthstatus = createTransform((inboundstate, key) => {
  if (key === "taches") {
    return omit(inboundstate, ["tache", "authstatus"]);
  } else {
    return inboundstate;
  }
});
const persistConfig = {
  key: "root",
  storage,
  trasnforms: [usersBalcklist, usersauthstatus , projectsauthstatus, tachesauthstatus ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
