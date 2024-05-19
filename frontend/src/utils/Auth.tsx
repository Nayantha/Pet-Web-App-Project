import pb from "lib/pocketbase"
import { UserLoginData } from "models/UserLoginData.ts";

export async function login(data: UserLoginData) {
    await loginToPB( data );
}

async function loginToPB(data: UserLoginData) {
    try {
        await
            pb.collection( import.meta.env.VITE_PB_USER_TABLE )
                .authWithPassword( data.email, data.password );
        window.location.href = "/";
    } catch (e) {
        alert( e )
    }
}

export function logout() {
    pb.authStore.clear();
    window.location.reload();
}