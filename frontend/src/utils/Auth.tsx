import pb from "lib/pocketbase"
import { LoginAuthData } from "models/LoginAuthData.ts";
import { UserRegisterData } from "models/UserRegisterData.ts";

export async function login(data: LoginAuthData) {
    await loginToPB(data);
}

async function loginToPB(data: LoginAuthData) {
    try {
        await
            pb.collection(import.meta.env.VITE_PB_USER_TABLE)
                .authWithPassword(data.email, data.password);
        window.location.href = "/";
    } catch (e) {
        alert(e)
    }
}

export function logout() {
    pb.authStore.clear();
    window.location.reload();
}

export async function registerUser(data: UserRegisterData) {
    await register( data );
}

async function register(data: UserRegisterData) {
    try {
        await pb.collection( import.meta.env.VITE_PB_USER_TABLE ).create( data );
        await loginToPB( data );
        window.location.href = "/";
    } catch (e) {
        console.error( e )
        alert( e )
    }
}

export function redirectAuthenticatedUserToHome() {
    const isLogged = pb.authStore.isValid;
    if ( isLogged ) {
        window.location.href = "/";
    }
}