import axios from "axios";
import { axiosInstance } from "../config/axios";
import { tachesapi} from "../config/requests";


export function GetTaches() {
  return axiosInstance
    .get(tachesapi + "/")
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
}

