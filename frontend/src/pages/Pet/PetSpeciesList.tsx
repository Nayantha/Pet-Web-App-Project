import { Link, useLocation, useParams } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import usePetSpecies from "hooks/usePetSpecies.ts"
import PetListItem from "../../components/PetListItem.tsx";
import Pagination from "../../components/Pagination.tsx";
import "assets/PetList.css";

export default function PetSpeciesList() {
    const { species } = useParams();

    const petSpecies = String(species);

    // auto injected into the request query parameter finding function
    // @ts-ignore
    const location = useLocation();
    const { data, isError, isLoading, error } = usePetSpecies();

    if (isLoading) return <div>Loading post...</div>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <div className="pet-list">
            <div className="title">Pet Species : { petSpecies }</div>
            <SimpleGrid columns={ 2 } spacing={ 10 }>
                { data?.petList.map((pet) => (
                    <Link to={ `/pets/${ pet.id }` } key={ pet.id }>
                        <PetListItem key={ pet.id } pet={ pet }/>
                    </Link>
                )) }
            </SimpleGrid>

            <Pagination metadata={ data?.listMetadata ?? { totalItems: 0, totalPages: 0, perPage: 0, page: 0 } }/>
        </div>
    )
}