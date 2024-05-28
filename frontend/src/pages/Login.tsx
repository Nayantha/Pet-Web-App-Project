import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { login, redirectAuthenticatedUserToHome } from "utils/Auth.tsx";
import { UserLoginData } from "models/UserLoginData.ts";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

function Login() {
    redirectAuthenticatedUserToHome();

    const {register, handleSubmit, formState: {errors}} = useForm();
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
                <FormControl isInvalid={ errors.username }>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id="email" type="text" { ...register("email", {
                        required: 'email is required',
                        minLength: { value: 8, message: 'Minimum length should be 8' },
                        maxLength: { value: 20, message: 'Maximum length should be 20' },
                    }) }/>
                </FormControl>

                <FormControl isInvalid={errors.password}>
                    <FormLabel htmlFor='password'>password</FormLabel>
                    <Input id="password" type="password" {...register( "password", {
                        required: 'Password is required',
                        pattern: {
                            value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim,
                            message: "invalid password"
                        }
                    } )}/>
                </FormControl>

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading" : "Login"}</Button>
            </form>
            <Link to={'/register'}>Register</Link>
        </>
    )
}

export default Login;