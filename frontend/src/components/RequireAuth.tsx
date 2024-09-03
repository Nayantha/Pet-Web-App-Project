import pb from "../lib/pocketbase.ts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
    const location = useLocation();

    if (!pb.authStore.isValid) {
        return (
            <Navigate to={ {pathname: "/register"} } state={ {location} } replace/>
        );
    }

    return <Outlet/>;
}
export default RequireAuth;