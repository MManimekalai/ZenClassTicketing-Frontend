import axios from "axios";
import { config } from "../config";

// All user login
export async function login(cred) {
  return await axios.post(`${config.api}/admin/login`, cred);
}
