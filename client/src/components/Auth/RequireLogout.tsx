import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import { Navigate } from 'react-router-dom';

const RequireAuth: React.FC<{ children: any }> = ({ children }) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);

  return isLoggedIn === false ? children : <Navigate to="/main" replace />;
};

export default RequireAuth;
