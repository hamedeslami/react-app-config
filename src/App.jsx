import {useSelector} from "react-redux";
import {Navigate, Route, Routes} from "react-router-dom";
import {filterRoutesByAuthStep} from "./config/routes";
import {authSelector} from "./store/user/user.selector";
import PrivateLayout from "@src/layout/private";
import PublicLayout from "@src/layout/public";

export default function App() {
    const isAuth = useSelector(authSelector);
    const routes = filterRoutesByAuthStep(!!isAuth);
    return (
        <Routes>
            <Route element={!!isAuth ? <PrivateLayout/> : <PublicLayout/>}>
                {routes.map((item) => {
                    return (
                        <Route path={item.route} element={item.element} key={item.route}/>
                    );
                })}
                <Route path="*" element={<Navigate replace to={routes[0].route}/>}/>
            </Route>
        </Routes>
    )
}
