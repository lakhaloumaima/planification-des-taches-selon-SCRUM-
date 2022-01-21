import axios from "axios";
import {mastersapi} from "../config/requests";

export function Register(data) {
  return axios
    .post(mastersapi + "/singup", data)
    .then((res) => {
      
      return res;
     
    })
    .catch((err) => {
      return err;
    });
}

