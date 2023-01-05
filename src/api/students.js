import axios from "axios";
import { config } from "../config";

// Student create by Admin API
export async function addStudent(data) {
    return axios.post(`${config.api}/admin/students/register`,data,{
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    })
  }
  
// List All students for Admin API
export async function listStudents()  {
    return axios.get(`${config.api}/admin/students/data`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }