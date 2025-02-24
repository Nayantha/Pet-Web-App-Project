import "../assets/Login.css";
import { useForm } from "react-hook-form";
import { UserRegisterData } from "models/UserRegisterData.ts";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Link as ChakraLink } from '@chakra-ui/react'
import useRegister from "../hooks/useRegister.ts";

function Register() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { mutate: registerUser, isLoading, isError } = useRegister();

    async function handleRegister(data: any) {
        data.avatar = data.avatar[0];
        await registerUser(data as UserRegisterData);
        reset();
    }

    return (
        <div id="auth-form-container">
            { isLoading && <p>Loading....</p> }
            { isError && <p>Invalid details</p> }
            <form onSubmit={ handleSubmit(handleRegister) }>
                <h1>Register</h1>
                <FormControl isInvalid={ !!errors.name }>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input id="name" type="text" { ...register("name", {
                        required: 'Name is required',
                        minLength: {value: 8, message: 'Minimum length should be 8'},
                        maxLength: {value: 20, message: 'Maximum length should be 20'},
                    }) }/>
                    <FormErrorMessage>
                        { errors.name && // @ts-ignore
                            <p>{ errors.name.message }</p> }
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={ !!errors.username }>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input id="username" type="text" { ...register("username", {
                        required: 'Username is required',
                        minLength: { value: 8, message: 'Minimum length should be 8' },
                        maxLength: { value: 20, message: 'Maximum length should be 20' },
                    }) }/>
                    <FormErrorMessage>
                        { errors.username && // @ts-ignore
                            <p>{ errors.username.message }</p> }
                    </FormErrorMessage>
                </FormControl>

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
                    <FormLabel htmlFor='password'>password</FormLabel>
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

                <FormControl isInvalid={ !!errors.passwordConfirm }>
                    <FormLabel htmlFor='passwordConfirm'>Confirm Password</FormLabel>
                    <Input id="passwordConfirm" type="password" { ...register("passwordConfirm", {
                        required: 'Password Confirm is required',
                        pattern: {
                            value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim,
                            message: "invalid password"
                        }
                    }) }/>
                    <FormErrorMessage>
                        { errors.passwordConfirm && // @ts-ignore
                            <p>{ errors.passwordConfirm.messag }e</p> }
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={ !!errors.avatar }>
                    <FormLabel htmlFor='name'>Avatar</FormLabel>
                    <Input type="file" accept="image/jpg, image/jpeg, image/png, image/webp" { ...register("avatar", {
                        required: 'Avatar is required',
                    }) }/>
                    <FormErrorMessage>
                        { errors.avatar && // @ts-ignore
                            <p>{ errors.avatar.message }</p> }
                    </FormErrorMessage>
                </FormControl>

                <div>
                    <Button type="submit" disabled={ isLoading }>
                        { isLoading ? "Loading" : "Register" }</Button>
                    <ChakraLink as={ ReactRouterLink } to={ '/login' }>Login</ChakraLink>
                </div>
            </form>
        </div>
    )

}

export default Register;