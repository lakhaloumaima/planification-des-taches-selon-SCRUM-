import axios from "axios";
import { axiosInstance } from "../config/axios";
import { projectsapi  } from "../config/requests";

export function Create(data) {
  return axiosInstance
    .post(projectsapi + "/projectupdate" ,data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

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

export function DeletePro(id) {
  return axiosInstance
    .post(projectsapi+'/dellproject' , id )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function DeleteTache(id) {
  return axiosInstance
    .post(projectsapi + "/delltache" , id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}


export function UpdateProject(data) {
  return axiosInstance
    .post(projectsapi +'/projectedit' , data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function GetProjectByid(data) {
  return axiosInstance
    .post(projectsapi + "/oneproject" , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function GetProjectByclient(data) {
  return axiosInstance
    .post(projectsapi + "/getprojectbyclient" ,data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}