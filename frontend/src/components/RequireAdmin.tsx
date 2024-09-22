import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthStore from "lib/authStore.ts";

const RequireAdmin = () => {
    const isAdmin = AuthStore.isAdmin;
    const location = useLocation();

    if (!isAdmin) {
        return (
            <Navigate to={ {pathname: "/"} } state={ {location} } replace/>
        );
    }

    return <Outlet/>;
}
export default RequireAdmin;