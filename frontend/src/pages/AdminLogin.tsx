import "../assets/Login.css";
import { useForm } from "react-hook-form";
import { LoginAuthData } from "models/LoginAuthData.ts";
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import useAdminLogin from "hooks/useAdminLogin.ts";

export default function AdminLogin() {

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm();
    const {mutate: adminLogin, isLoading, isError} = useAdminLogin();

    async function handleAdminLogin(data: any) {
        await adminLogin(data as LoginAuthData);
        reset();
    }

    return (
        <div id="auth-form-container">
            { isLoading && <p>Loading....</p> }
            { isError && <p>Invalid email or password</p> }
            <form onSubmit={ handleSubmit(handleAdminLogin) }>
                <h1>Admin Login</h1>
                <FormControl isInvalid={ !!errors.email }>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id="email" type="email"
                           { ...register("email", {
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
                    <Button type="submit" disabled={ isLoading }>
                        { isLoading ? "Loading" : "Login" }</Button>
                </div>
            </form>
        </div>
    )
}