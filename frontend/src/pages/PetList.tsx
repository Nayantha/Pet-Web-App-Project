import Pagination from "../components/Pagination.tsx";
import { Link, useLocation } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import usePets from "../hooks/usePets.ts";
import PetListItem from "../components/PetListItem.tsx";

export default function PetList() {
    // auto injected into the request query parameter finding function
    // @ts-ignore
    const location = useLocation();
    const { data, isError, isLoading } = usePets();

    if (isLoading) return <div>Loading post...</div>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <>
            <Pagination metadata={ data?.listMetadata ?? { totalItems: 0, totalPages: 0, perPage: 0, page: 0 } }/>
            <SimpleGrid columns={ 2 } spacing={ 10 }>
                { data?.petList.map((pet) => (
                    <Link to={ `/pets/${ pet.id }` }>
                        <PetListItem key={ pet.id } pet={ pet }/>
                    </Link>
                )) }
            </SimpleGrid>
        </>
    )
}