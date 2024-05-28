import pb from "lib/pocketbase.ts";
import { Link } from "react-router-dom";
import { RecordModel } from "pocketbase";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'
import { useRef } from "react";
import useLogout from "../hooks/useLogout.ts";

function Profile() {
    const logout = useLogout();
    const isLoggedIn = pb.authStore.isValid;
    const userModel: RecordModel = pb.authStore.model as RecordModel;
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef<HTMLButtonElement | null>(null);
    if ( isLoggedIn )
        return (
            <>
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                    Open
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='right'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                >
                    <DrawerOverlay/>
                    <DrawerContent>
                        <DrawerHeader>
                            <img src={pb.files.getUrl( userModel, userModel.avatar )}
                                 alt={"profile pic of user" + userModel.username}/>
                        </DrawerHeader>
                        <DrawerBody>
                            <div>Email : {userModel?.email}</div>
                            <div>Name : {userModel?.name}</div>
                            <div>UserName : {userModel?.username}</div>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant='outline' mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button colorScheme='blue' onClick={logout}>Logout</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </>
        )

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerHeader>
                        Login or Register
                    </DrawerHeader>
                    <DrawerBody>
                        <Link to="/login">Login</Link>
                        <br/>
                        <Link to="/register">Register</Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Profile;