import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerUser } from "utils/Auth.tsx";
import { UserRegisterData } from "models/UserRegisterData.ts";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Link as ChakraLink } from '@chakra-ui/react'

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
            <h4>Register</h4>
            {isLoading && <p>Loading....</p>}
            <form onSubmit={handleSubmit( handleRegister )}>
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>Name</FormLabel>
                    <Input id="name" type="text" {...register( "name", {
                        required: 'Name is required',
                        minLength: {value: 8, message: 'Minimum length should be 8'},
                        maxLength: {value: 20, message: 'Maximum length should be 20'},
                    } )}/>
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.username}>
                    <FormLabel htmlFor='username'>Username</FormLabel>
                    <Input id="username" type="text" {...register( "username", {
                        required: 'Username is required',
                        minLength: {value: 8, message: 'Minimum length should be 8'},
                        maxLength: {value: 20, message: 'Maximum length should be 20'},
                    } )}/>
                </FormControl>

                <FormControl isInvalid={errors.email}>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id="email" type="email"  {...register( "email", {
                        required: 'Email is required',
                        pattern: {
                            value: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
                            message: "invalid email address"
                        }
                    } )}/>
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

                <FormControl isInvalid={errors.passwordConfirm}>
                    <FormLabel htmlFor='passwordConfirm'>Confirm Password</FormLabel>
                    <Input id="passwordConfirm" type="password" {...register( "passwordConfirm", {
                        required: 'Password Confirm is required',
                        pattern: {
                            value: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim,
                            message: "invalid password"
                        }
                    } )}/>
                </FormControl>

                <FormControl isInvalid={errors.avatar}>
                    <FormLabel htmlFor='name'>Avatar</FormLabel>
                    <Input type="file" accept="image/jpg, image/jpeg, image/png, image/webp" {...register( "avatar", {
                        required: 'Avatar is required',
                    } )}/>
                </FormControl>

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading" : "Register"}</Button>
            </form>
            <ChakraLink as={ReactRouterLink} to={'/login'}>Login</ChakraLink>
        </>
    )

}

export default Register;