import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router';

const PrivateRoute = () => {
  const isAuthenticated = useSelector(state => state.login.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
};

export default PrivateRoute;
