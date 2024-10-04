import { LoginAuthData } from "models/LoginAuthData.ts";
import pb from "../lib/pocketbase.ts";
import { useMutation } from "react-query";
import { setUser } from "../slices/authSlice.ts";
import { useDispatch } from "react-redux";

export default function useLogin() {
    const dispatch = useDispatch();

    async function login(data: LoginAuthData) {
        const authData = await
            pb.collection(import.meta.env.VITE_PB_USER_TABLE)
                .authWithPassword(data.email, data.password);
        dispatch(setUser(authData.record));
        window.location.href = "/";
    }

    return useMutation(login);
}