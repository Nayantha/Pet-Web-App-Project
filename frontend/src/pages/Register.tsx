import { useForm } from "react-hook-form";
import { useState } from "react";
import { registerUser } from "utils/Auth.tsx";
import { UserRegisterData } from "models/UserRegisterData.ts";
import { Link } from "react-router-dom";
import { Grid, TextField, Typography } from "@mui/material";

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
            <Typography variant="h4" gutterBottom>Register</Typography>
            {isLoading && <p>Loading....</p>}
            <form onSubmit={handleSubmit( handleRegister )}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField label="name" margin="normal" type="text"
                                   {...register( "name", {required: true} )} error={!!errors.name}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="username" margin="normal"
                                   type="text" {...register( "username", {required: true} )}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="email" margin="normal"
                                   type="email"  {...register( "email", {
                            required: true,
                            pattern: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim
                        } )}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="password" margin="normal" type="password" {...register( "password", {
                            required: true,
                            pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim
                        } )}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="retype password" margin="normal"
                                   type="password" {...register( "passwordConfirm", {
                            required: true,
                            pattern: /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{8,16})\S$/gim
                        } )}/>
                    </Grid>
                    <Grid item xs={12}>
                        <input type="file"
                               accept="image/jpg, image/jpeg, image/png, image/webp" {...register( "avatar" )}/>
                    </Grid>
                </Grid>

                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Loading" : "Register"}</button>
            </form>
            <Link to={'/login'}>Login</Link>
        </>
    )
}

export default Register;