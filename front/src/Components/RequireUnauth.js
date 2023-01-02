import { Navigate, Outlet, useLocation } from 'react-router-dom';

const RequireUnauth = () => {
  const accessToken = window.localStorage.getItem('accessToken');
  const location = useLocation();

  return !accessToken ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export default RequireUnauth;
