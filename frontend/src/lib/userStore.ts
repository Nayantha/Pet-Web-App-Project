import pb from "./pocketbase.ts";
import User from "models/User.ts";

const AuthenticatedUser = pb.authStore.model as User;
AuthenticatedUser.avatar = pb.files.getUrl(AuthenticatedUser, AuthenticatedUser.avatar);
export default AuthenticatedUser;