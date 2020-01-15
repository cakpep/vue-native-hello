import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

export function fetch(path) {
  return axios.get(`${baseURL}/${path}`).then(response => {
    return response.data;
  });
}
