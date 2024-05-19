import { Link } from "react-router-dom";
import pb from "lib/pocketbase.ts";
import { logout } from "utils/Auth.tsx";

function Home() {
    const isLoggedIn = pb.authStore.isValid;

    if ( isLoggedIn )
        return (
            <>
                <h1>Logged in: {pb.authStore.isValid.toString()}</h1>
                <button onClick={logout}>Logout</button>
            </>
        )

    return (
        <>
            <div>Home</div>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/register">Register</Link>
        </>
    )
}

export default Home;