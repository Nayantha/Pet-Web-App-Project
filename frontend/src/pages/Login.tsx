import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login } from "../utils/Auth.tsx";
import { UserLoginData } from "../models/UserLoginData.ts";


function Login() {
    const {register, handleSubmit} = useForm();
    const [isLoading, setLoading] = useState( false );

    async function handleLogin(data: any) {
        setLoading( true );
        await login( data as UserLoginData );
        setLoading( false );
    }

    return (
        <>
            <div>Login</div>
            {isLoading && <p>Loading....</p>}
            <form onSubmit={handleSubmit( handleLogin )}>
                <input type="email" placeholder="name@mail.com" {...register( "email" )}/>
                <br/>
                <input type="password" placeholder="password" {...register( "password" )}/>
                <br/>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading" : "Login"}</button>
            </form>
            <Link to={'/register'}>Register</Link>
        </>
    )
}

export default Login;