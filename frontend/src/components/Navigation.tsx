import Profile from "components/Profile.tsx";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import "../assets/Navigation.css";

function Navigation() {

    return (
        <>
            <nav>
                <ChakraLink className="nav-link" as={ ReactRouterLink } to={ '/' }>
                    <strong className="logo">Pet Shop</strong>
                </ChakraLink>
                <div className="nav-links">
                    <ChakraLink className="nav-link" as={ ReactRouterLink } to={ '/pets' }>Pets</ChakraLink>
                </div>
                <Profile/>
            </nav>
        </>
    )
}

export default Navigation;