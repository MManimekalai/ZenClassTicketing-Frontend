import axios from "axios";
import { config } from "../config";

// List of all query of the particular student API
export async function listStudent_allQuery(sId)  {
    return axios.get(`${config.api}/students/query/data/${sId}`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // Paricular Query of the student API
  export async function listStudent_oneQuery(sId,_id)  {
    return await axios.get(`${config.api}/students/query/data/${sId}/${_id}`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // Query Create API for student
  export async function createQuery(sId,data) {
    return await axios.post(`${config.api}/students/query/create/${sId}`,data,{
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    })
  }

  // List of all query to Admin API
  export async function listAdmin_allQuery()  {
    return axios.get(`${config.api}/admin/query/data`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // List of one single query to Admin API
  export async function listAdmin_oneQuery(qId)  {
    return await axios.get(`${config.api}/admin/query/data/${qId}`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // Assign Mentor API
  export async function assign_mentor(qId,data)  {
    return await axios.put(`${config.api}/admin/query/admin_update/${qId}`,data, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // Mentor list His/her All assigned Query API
  export async function listMentor_allQuery(mId)  {
    return axios.get(`${config.api}/mentors/query/all_query/${mId}`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // Mentor list His/her particular assigned Query API
  export async function listMentor_oneQuery(mId,qId)  {
    return await axios.get(`${config.api}/mentors/query/on_query/${mId}/${qId}`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }

  // Mentor Resolve a query API
  export async function resolve_mentor(mId,qId,data)  {
    return await axios.put(`${config.api}/mentors/query/resolve_query/${mId}/${qId}`,data, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`),
      },
    });
  }