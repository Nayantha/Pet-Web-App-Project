import Profile from "components/Profile.tsx";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Navigation() {

    return (
        <>
            <nav>
                <strong className="logo">Pet Shop</strong>
                <div className="nav-links">
                    <ChakraLink className="nav-link" as={ ReactRouterLink } to={ '/pets' }>Pets</ChakraLink>
                </div>
                <Profile/>
            </nav>
        </>
    )
}

export default Navigation;