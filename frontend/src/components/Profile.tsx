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
    Flex,
    Spacer,
    Text,
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
                        <Flex>
                            <Text>Email : </Text>
                            <Spacer/>
                            <Text className="user-email">{ AuthenticatedUser.email }</Text>
                        </Flex>
                        <Flex>
                            <Text>Name : </Text>
                            <Spacer/>
                            <Text className="user-name">{ AuthenticatedUser.name }</Text>
                        </Flex>
                        <Flex>
                            <Text>UserName : </Text>
                            <Spacer/>
                            <Text className="username">{ AuthenticatedUser.username }</Text>
                        </Flex>
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