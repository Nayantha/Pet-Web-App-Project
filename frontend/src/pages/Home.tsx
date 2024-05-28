import Profile from "components/Profile.tsx";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Home() {

    return (
        <>
            <div>Home</div>
            <Profile/>
            <br/>
            <ChakraLink as={ ReactRouterLink } to={ '/pets' }>Pets</ChakraLink>
        </>
    )
}

export default Home;