import pb from "./pocketbase.ts";
import User from "../models/User.ts";

const AuthenticatedUser = pb.authStore.model as User;
export default AuthenticatedUser;