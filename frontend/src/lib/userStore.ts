import pb from "./pocketbase.ts";
import AuthStore from "./authStore.ts";

const AuthenticatedUser = AuthStore.model;
if (AuthenticatedUser && AuthenticatedUser.avatar) {
    AuthenticatedUser.avatar = pb.files.getUrl(AuthenticatedUser, AuthenticatedUser.avatar);
}
export default AuthenticatedUser;