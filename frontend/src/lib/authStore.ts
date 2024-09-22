import pb from "./pocketbase.ts";
import User from "models/User.ts";

interface AuthStoreModel {
    isAdmin: boolean;
    isAuthRecord: boolean;
    isValid: boolean;
    model: User;
    token: string;
}

const AuthStore = pb.authStore as unknown as AuthStoreModel;
export default AuthStore;