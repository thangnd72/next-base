import axios from "axios";

axios.interceptors.response.use(
  (res) => res,
  async (error) => {
    // const originalRequest = error.config;
    return Promise.reject(error);
  },
);

// const handleError = () => {
//   // handle sign out
// };

export default axios;
