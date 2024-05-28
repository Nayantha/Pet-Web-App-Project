import pb from "../lib/pocketbase.ts";
import { useMutation } from "react-query";
import { UserRegisterData } from "../models/UserRegisterData.ts";

export default function useRegister() {

    async function register(data: UserRegisterData) {
        await pb.collection(import.meta.env.VITE_PB_USER_TABLE).create(data);
        await
            pb.collection(import.meta.env.VITE_PB_USER_TABLE)
                .authWithPassword(data.email, data.password);
        window.location.href = "/";
    }

    return useMutation(register);
}