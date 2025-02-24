import "../assets/Login.css";
import { Link as ReactRouterLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginAuthData } from "models/LoginAuthData.ts";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Link as ChakraLink } from "@chakra-ui/react";
import useLogin from "../hooks/useLogin.ts";

function Login() {

    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const {mutate: login, isLoading, isError} = useLogin();

    async function handleLogin(data: any) {
        await login(data as LoginAuthData);
        reset();
    }

    return (
        <div id="auth-form-container">
            { isLoading && <p>Loading....</p> }
            { isError && <p>Invalid email or password</p> }
            <form onSubmit={ handleSubmit(handleLogin) }>
                <h1>Login</h1>
                <FormControl isInvalid={ !!errors.email }>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id="email" type="email"  { ...register("email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                            message: "invalid email address"
                        }
                    }) }/>
                    <FormErrorMessage>
                        { errors.email && // @ts-ignore
                            <p>{ errors.email.message }</p> }
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={ !!errors.password }>
                    <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input id="password" type="password" { ...register("password", {
                        required: 'Password is required',
                        pattern: {
                            value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim,
                            message: "invalid password"
                        }
                    }) }/>
                    <FormErrorMessage>
                        { errors.password && // @ts-ignore
                            <p>{ errors.password.message }</p> }
                    </FormErrorMessage>
                </FormControl>

                <div>
                    { !isLoading && <Button type="submit">Login</Button> }
                    { isLoading && <Button isDisabled>Login</Button> }
                    <ChakraLink as={ ReactRouterLink } to={ '/register' }>Register</ChakraLink>
                </div>
            </form>
        </div>
    )
}

export default Login;