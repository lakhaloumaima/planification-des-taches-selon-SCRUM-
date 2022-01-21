import { axiosInstance } from "../config/axios";
import { developpersapi } from "../config/requests";

export function Create(data) {
  return axiosInstance
    .post(developpersapi, data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function GetDeveloppers(data) {
  return axiosInstance
    .post(developpersapi+ "/getuser",data )
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function Update(data) {
  return axiosInstance
    .put(developpersapi+'/'+data.id , data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

/*
export function UpdateImage(data) {
  return axiosInstance
    .put(developpersapi + "/image/" + data.id, data.data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
*/
export function DeleteDev(id) {
  return axiosInstance
    .delete(developpersapi+'/'+id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
