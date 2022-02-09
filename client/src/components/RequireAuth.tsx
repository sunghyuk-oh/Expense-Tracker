import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return isLoggedIn === true ? children : <Navigate to="/" replace />;
};

export default RequireAuth;
