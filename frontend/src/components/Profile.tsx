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
import { ReactNode, useRef } from "react";
import useLogout from "../hooks/useLogout.ts";

function Profile() {
    const logout = useLogout();
    const isLoggedIn = pb.authStore.isValid;
    const userModel: RecordModel = pb.authStore.model as RecordModel;
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const DrawerButton = () => (
        <Button ref={ btnRef } colorScheme='teal' onClick={ onOpen }>
            Profile
        </Button>
    );

    const DrawerComponent = ({children}: { children: ReactNode }) => (
        <Drawer
            isOpen={ isOpen }
            placement='right'
            onClose={ onClose }
            finalFocusRef={ btnRef }
        >
            <DrawerOverlay/>
            <DrawerContent>
                { children }
            </DrawerContent>
        </Drawer>
    );

    if (isLoggedIn)
        return (
            <>
                <DrawerButton/>
                <DrawerComponent>
                    <DrawerHeader>
                        <img src={ pb.files.getUrl(userModel, userModel.avatar) }
                             alt={ "profile pic of user" + userModel.username }/>
                    </DrawerHeader>
                    <DrawerBody>
                        <div>Email : { userModel?.email }</div>
                        <div>Name : { userModel?.name }</div>
                        <div>UserName : { userModel?.username }</div>
                    </DrawerBody>
                    <DrawerFooter bg='transparent'>
                        <Button variant='outline' mr={ 3 } onClick={ onClose }>
                            Close
                        </Button>
                        <Button colorScheme='blue' onClick={ logout }>Logout</Button>
                    </DrawerFooter>
                </DrawerComponent>
            </>
        )

    return (
        <Button as={ Link } to="/login" colorScheme='teal'>Login</Button>
    )
}

export default Profile;