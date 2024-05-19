import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerUser } from "utils/Auth.tsx";
import { UserRegisterData } from "models/UserRegisterData.ts";
import { Link } from "react-router-dom";

function Register() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [isLoading, setLoading] = useState( false );

    async function handleRegister(data: any) {
        data.avatar = data.avatar[0];
        setLoading( true );
        await registerUser( data as UserRegisterData );
        setLoading( false );
    }

    return (
        <>
            <div>Register</div>
            {isLoading && <p>Loading....</p>}
            <form onSubmit={handleSubmit( handleRegister )}>
                <input type="text" placeholder="name" {...register( "name", {required: true} )}/> <br/>
                <input type="text" placeholder="username" {...register( "username", {required: true} )}/> <br/>
                <input type="email" placeholder="name@mail.com" {...register( "email", {
                    required: true,
                    pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
                } )}/><br/>
                {errors.email && <span>Invalid email</span>}
                <input type="password" placeholder="password" {...register( "password", {
                    required: true,
                    pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim
                } )}/><br/>
                <input type="password" placeholder="retype password" {...register( "passwordConfirm", {
                    required: true,
                    pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim
                } )}/><br/>
                <input type="file" placeholder=""
                       accept="image/jpg, image/jpeg, image/png, image/webp" {...register( "avatar" )}/><br/>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading" : "Register"}</button>
            </form>
            <Link to={'/login'}>Login</Link>
        </>
    )
}

export default Register;