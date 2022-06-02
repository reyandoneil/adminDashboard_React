import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import PrivateRoute from './privateRoute';

import {
  Dashboard,
  DashboardHome,
  Transaction,
  Invoice,
  User,
  MasterAirlines,
  MasterHotel,
  ErrorPage,
  Login,
  Register,
} from '../../Pages';
import { AutoLogoutTimer } from '../../Utils';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/resetPassword" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            // <PrivateRoute redirectTo={'/login'}>
              <AutoLogoutTimer ComposedClass={Dashboard} />
            // </PrivateRoute>
          }
        >
          <Route />
          <Route path="home" element={<DashboardHome />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="invoice" element={<Invoice />} />
          <Route path="user" element={<User />} />
          <Route
            path="master_airlines"
            element={<MasterAirlines />}
          />
          <Route path="master_hotel" element={<MasterHotel />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
