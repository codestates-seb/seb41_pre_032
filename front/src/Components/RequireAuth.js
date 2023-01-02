import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../util/useAuth';

const RequireAuth = () => {
  const { loggedin } = useAuth();
  const location = useLocation();

  return loggedin ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
