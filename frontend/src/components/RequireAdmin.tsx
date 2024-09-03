import pb from "../lib/pocketbase.ts";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAdmin = () => {
    const isAdmin = pb.authStore.isAdmin;
    const location = useLocation();

    if (!isAdmin) {
        return (
            <Navigate to={ {pathname: "/"} } state={ {location} } replace/>
        );
    }

    return <Outlet/>;
}
export default RequireAdmin;