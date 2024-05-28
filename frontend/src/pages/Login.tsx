import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { UserLoginData } from "models/UserLoginData.ts";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import useLogin from "../hooks/useLogin.ts";

function Login() {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const { mutate: login, isLoading, isError } = useLogin();

    async function handleLogin(data: any) {
        await login(data as UserLoginData);
        reset();
    }

    return (
        <>
            <div>Login</div>
            { isLoading && <p>Loading....</p> }
            { isError && <p>Invalid email or password</p> }
            <form onSubmit={ handleSubmit(handleLogin) }>
                <FormControl isInvalid={ errors.email }>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id="email" type="email"  { ...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                            message: "invalid email address"
                        }
                    }) }/>
                    <FormErrorMessage>
                        { errors.email && errors.email.message }
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={ errors.password }>
                    <FormLabel htmlFor='password'>password</FormLabel>
                    <Input id="password" type="password" { ...register("password", {
                        required: 'Password is required',
                        pattern: {
                            value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim,
                            message: "invalid password"
                        }
                    }) }/>
                    <FormErrorMessage>
                        { errors.password && errors.password.message }
                    </FormErrorMessage>
                </FormControl>

                <Button type="submit" disabled={ isLoading }>
                    { isLoading ? "Loading" : "Login" }</Button>
            </form>
            <Link to={ '/register' }>Register</Link>
        </>
    )
}

export default Login;