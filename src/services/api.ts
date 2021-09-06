import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.icndb.com'
});

export default instance;