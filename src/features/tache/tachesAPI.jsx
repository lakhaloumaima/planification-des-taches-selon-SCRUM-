import axios from "axios";
import { axiosInstance } from "../config/axios";
import { tachesapi} from "../config/requests";


export function GetTaches(data) {
  return axiosInstance
    .post(tachesapi + "/onetache" , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

export function Create(data) {
  return axiosInstance
    .post(tachesapi + "/tacheupdate" , data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function DeletetTache(id) {
  return axiosInstance
    .post(tachesapi + "/delltache" , id)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}
export function UpdateTaches(dataa) {
  return axiosInstance
    .post(tachesapi +'/tacheedit' , dataa.tache_id , dataa.dataa)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

