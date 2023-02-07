import axios from "axios";

export default axios.create({
  baseURL: "http://bytecodelearners.cuh.ac.in/bytecode-server",
  // baseURL: "http://192.168.137.218:8000/api",
});
