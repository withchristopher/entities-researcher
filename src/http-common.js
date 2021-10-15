import axios from "axios";

export default axios.create({
  // Dev environment
  // baseURL: "http://localhost:8000/",
  // Demo environment
  baseURL: "https://e-researcher.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});
