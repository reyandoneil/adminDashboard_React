import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, redirectTo }) => {
  const auth = useSelector((state) => state.user.isLogin);
  return auth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
