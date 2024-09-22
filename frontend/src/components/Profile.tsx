import pb from "lib/pocketbase.ts";
import { Link } from "react-router-dom";
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
import useLogout from "hooks/useLogout.ts";
import AuthenticatedUser from "lib/userStore.ts";

function Profile() {
    const logout = useLogout();
    const isLoggedIn = pb.authStore.isValid;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef<HTMLButtonElement | null>(null);

    const DrawerButton = () => (
        <Button ref={ btnRef } colorScheme='teal' onClick={ onOpen } className="profile-btn drawer-btn">
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
                        <img src={ AuthenticatedUser.avatar }
                             alt={ "profile pic of user" + AuthenticatedUser.username }
                             className="user-profile-pic"
                        />
                    </DrawerHeader>
                    <DrawerBody>
                        <div>Email : <span className="user-email">{ AuthenticatedUser.email }</span></div>
                        <div>Name : <span className="user-name">{ AuthenticatedUser.name }</span></div>
                        <div>UserName : <span className="username">{ AuthenticatedUser.username }</span></div>
                    </DrawerBody>
                    <DrawerFooter bg='transparent'>
                        <Button variant='outline' mr={ 3 } onClick={ onClose }>
                            Close
                        </Button>
                        <Button className="logout-btn" colorScheme='blue' onClick={ logout }>Logout</Button>
                    </DrawerFooter>
                </DrawerComponent>
            </>
        )

    return (
        <Button as={ Link } to="/login" colorScheme='teal' className="login-btn">Login</Button>
    )
}

export default Profile;