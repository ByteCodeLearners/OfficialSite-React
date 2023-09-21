import axios from "axios";
import baseUrl from "./baseurl";

export default axios.create({
  baseURL: `${baseUrl}/api`,
});
