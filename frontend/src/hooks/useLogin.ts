import { UserLoginData } from "models/UserLoginData.ts";
import pb from "../lib/pocketbase.ts";
import { useState } from "react";

export default function useLogin() {
    const [isLoading, setLoading] = useState(false);

    async function login(data: UserLoginData) {
        setLoading(true);
        try {
            await
                pb.collection(import.meta.env.VITE_PB_USER_TABLE)
                    .authWithPassword(data.email, data.password);
            window.location.href = "/";
        } catch (e) {
            alert(e)
        }
        setLoading(false);
    }

    return { login, isLoading };
}