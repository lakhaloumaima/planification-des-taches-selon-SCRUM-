import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import mastersReducer from '../features/master/mastersSlice' ;
import developpersReducer from '../features/developper/developpersSlice' ;

import projectsReducer from '../features/project/projectsSlice' ;
import tachesReducer from '../features/tache/tachesSlice' ;

export const store = configureStore({
  reducer: {
    
    users: usersReducer,
    //clients: clientsReducer,
    //admins:adminsReducer,

    projects : projectsReducer ,

    taches : tachesReducer ,

    masters : mastersReducer,
    developpers : developpersReducer ,


  },
});
