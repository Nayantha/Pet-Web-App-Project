import { LoginAuthData } from "models/LoginAuthData.ts";
import pb from "../lib/pocketbase.ts";
import { useMutation } from "react-query";

export default function useAdminLogin() {

    async function adminLogin(data: LoginAuthData) {
        await
            pb.admins.authWithPassword(data.email, data.password);
        window.location.href = "/";
    }

    return useMutation(adminLogin);
}