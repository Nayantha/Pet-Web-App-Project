import Profile from "components/Profile.tsx";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Home() {

    return (
        <>
            <strong className="logo">Pet Shop</strong>
            <div className="nav-links">
                <ChakraLink className="nav-link" as={ ReactRouterLink } to={ '/pets' }>Pets</ChakraLink>
            </div>
            <Profile/>
        </>
    )
}

export default Home;