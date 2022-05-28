
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';


import {
    Dashboard,
    DashboardHome,
    Transaction,
    Invoice,
    User,
    MasterAirlines,
    MasterHotel,
    ErrorPage

} from '../../Pages';
import { AutoLogoutTimer } from '../../Utils';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/dashboard/*"
                    element={
                        <AutoLogoutTimer ComposedClass={Dashboard} />
                    }
                >
                    <Route />
                    <Route path="home" element={<DashboardHome />} />
                    <Route path="transaction" element={<Transaction />} />
                    <Route path="invoice" element={<Invoice />} />
                    <Route path="user" element={<User />} />
                    <Route path="master_airlines" element={<MasterAirlines />} />
                    <Route path="master_hotel" element={<MasterHotel />} />
                    <Route path="*" element={<ErrorPage />} />
                </Route>
                <Route
                    path="*"
                    element={<ErrorPage />}
                ></Route>
            </Routes>
        </Router >
    );
}

export default AppRouter;
