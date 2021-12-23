import axios from "axios";
import { axiosInstance } from "../config/axios";
import { projectsapi  } from "../config/requests";

export function Create(data) {
  return axiosInstance
    .post(projectsapi + "/projectupdate" , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
/*
export function Create(data) {
  return axiosInstance
    .post(projectapi  , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
*/
export function GetProjects() {
  return axiosInstance
    .get(projectsapi + "/getproject")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function DeletePro() {
  return axiosInstance
    .post(projectsapi+'/dellproject'  )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
