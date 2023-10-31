import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { filterRoutesByAuthStep } from "./config/routes";
import { authSelector } from "./store/user/user.selector";

export default function App() {
    const isAuth = useSelector(authSelector);
    const routes = filterRoutesByAuthStep(!!isAuth);
    return (
        <Routes>
            {routes.map((item) => {
                return (
                    <Route path={item.route} element={item.Element} key={item.route} />
                );
            })}
            <Route path="*" element={<Navigate replace to={routes[0].route} />} />
        </Routes>
    )
}
