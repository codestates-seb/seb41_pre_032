import jwtDecode from 'jwt-decode';
import useAuth from './useAuth';
import { axiosInstance } from './axios';
import axios from 'axios';

const useAxios = () => {
  const { auth, user, setUser, setAuth } = useAuth();

  axiosInstance.interceptors.request.use(async (req) => {
    const expired = Date.now() >= user?.exp * 1000;

    if (!expired) return req;

    try {
      console.log('interceptors ran');

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/refresh`,
        {
          headers: {
            Authorization: auth?.accessToken,
            Refresh: auth?.refreshToken,
          },
        }
      );

      localStorage.setItem(
        'auth',
        JSON.stringify({
          ...auth,
          accessToken: res.headers.authorization,
        })
      );

      setAuth((prev) => {
        return {
          ...prev,
          accessToken: res.headers.authorization,
        };
      });

      setUser(jwtDecode(res.headers.authorization));
    } catch (error) {
      console.log(error.response.data);
    }

    return req;
  });

  return axiosInstance;
};

export default useAxios;
