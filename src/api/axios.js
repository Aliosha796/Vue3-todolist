import axios from "axios";
function myAxios(axiosConfig) {
  const service = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 10000,
  });

  return service(axiosConfig);
}





export default myAxios;
