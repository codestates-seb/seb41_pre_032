import useLocalState from "../util/useLocalStorage";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  setJwt("testJwt");

  return jwt ? children : <Navigate to="/signup" />;
};

export default PrivateRoute;
