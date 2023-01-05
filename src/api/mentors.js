import axios from "axios";
import { config } from "../config";

// Mentor create API
export async function addMentor(data) {
  return axios.post(`${config.api}/admin/mentor/register`,data,{
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  })
}

// Mentor list API
export async function listMentors()  {
  return axios.get(`${config.api}/admin/mentor/data`, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`),
    },
  });
}
