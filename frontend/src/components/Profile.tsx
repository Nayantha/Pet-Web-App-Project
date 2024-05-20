import pb from "lib/pocketbase.ts";
import { logout } from "../utils/Auth.tsx";
import { Link } from "react-router-dom";
import { RecordModel } from "pocketbase";

function Profile(){
    const isLoggedIn = pb.authStore.isValid;
    const userModel: RecordModel = pb.authStore.model as RecordModel;

    if ( isLoggedIn )
        return (
            <div>
                <img src={pb.files.getUrl(userModel, userModel.avatar)} alt={"profile pic of user" + userModel.username}/>
                <div>Email : {userModel?.email}</div>
                <div>Name : {userModel?.name}</div>
                <div>UserName : {userModel?.username}</div>
                <button onClick={logout}>Logout</button>
            </div>
        )

    return (
        <>
            <Link to="/login">Login</Link>
            <br/>
            <Link to="/register">Register</Link>
        </>
    )
}

export default Profile;