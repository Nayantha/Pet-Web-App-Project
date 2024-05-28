import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Pagination({ metadata }: { metadata: ListMetadata }) {
    return (
        <Flex>
            <Link to="/pets"><Button>1</Button></Link>
            <Link to="/pets/?p=2"><Button>2</Button></Link>
        </Flex>
    );
}

