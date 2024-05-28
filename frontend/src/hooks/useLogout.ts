import pb from "lib/pocketbase.ts";

export default function useLogout() {
    function logout() {
        pb.authStore.clear();
        window.location.reload();
    }

    return logout;
}