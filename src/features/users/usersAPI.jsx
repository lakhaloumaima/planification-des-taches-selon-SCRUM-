import axios from "axios";
import { axiosInstance } from "../config/axios";
import { usersapi} from "../config/requests";

export function Login(data) {
  return axios
    .post(usersapi + "/login", data)
    .then((res) => {
     /*
      const token = res.data.token ;
      localStorage.setItem('token' , token ) ;
      selectauth(token) ;
      */
      return res;
    })
    .catch((err) => {
      return err;
    });
}
/*
export default function selectauth(token) {
  if(token) {
     axios.defaults.headers.common['Auth'] = 'bearer $(token)'  ;

  }
  else {
     delete axios.defaults.headers.common['Auth'] ;
  }
}
*/
export function GetUsers(data) {
  return axiosInstance
    .post(usersapi + "/getuser",data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function DeletetUser(data) {
  return axiosInstance
    .post(usersapi + "/delluser" , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function UpdateUser(data) {
  return axiosInstance
    .post(usersapi+'/useredit' , data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function GetUserByemail(data) {
  return axiosInstance
    .post(usersapi + "/oneuser" , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
/* export function GetMe() {
  return axiosInstance
    .get(usersapi + "/me")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
*/

/*
export function UploadAvatar(data) {
  return axiosInstance
    .put(usersapi + "/image/id",data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
*/

