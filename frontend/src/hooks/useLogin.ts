import { UserLoginData } from "models/UserLoginData.ts";
import pb from "../lib/pocketbase.ts";
import { useMutation } from "react-query";

export default function useLogin() {

    async function login(data: UserLoginData) {
        await
            pb.collection(import.meta.env.VITE_PB_USER_TABLE)
                .authWithPassword(data.email, data.password);
        window.location.href = "/";
    }

    return useMutation(login);
}