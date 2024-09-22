import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthStore from "../lib/authStore.ts";

const RequireAuth = () => {
    const location = useLocation();

    if (!AuthStore.isValid) {
        return (
            <Navigate to={ { pathname: "/register" } } state={ { location } } replace/>
        );
    }
    return <Outlet/>;
}
export default RequireAuth;