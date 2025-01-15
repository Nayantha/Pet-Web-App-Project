import { LoginAuthData } from "models/LoginAuthData.ts";
import pb from "lib/pocketbase.ts";
import { useMutation } from "react-query";
import { updateState } from "features/auth/authSlice.ts";
import { useDispatch } from "react-redux";
import User from "../models/User.ts";

export default function useLogin() {
    const dispatch = useDispatch();

    async function login(data: LoginAuthData) {
        await
            pb.collection(import.meta.env.VITE_PB_USER_TABLE)
                .authWithPassword(data.email, data.password);
        dispatch(updateState({
            user: pb.authStore.model as unknown as User,
            isAuthenticated: pb.authStore.isValid && pb.authStore.isAuthRecord,
            isAdmin: pb.authStore.isAdmin,
            token: pb.authStore.token
        }));
        window.location.href = "/";
    }

    return useMutation(login);
}