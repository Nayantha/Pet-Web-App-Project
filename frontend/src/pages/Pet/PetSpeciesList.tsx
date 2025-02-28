import { useLocation, useParams } from "react-router-dom";
import usePetSpecies from "hooks/usePetSpecies.ts"
import "assets/PetList.css";
import Pet from "../../models/Pet.ts";
import ListWithPagination from "../../components/ListWithPagination.tsx";
import PetListItem from "../../components/PetListItem.tsx";

export default function PetSpeciesList() {
    const { species } = useParams();
    const petSpecies = String(species);

    // auto-injected into the request query parameter finding function
    // @ts-ignore
    useLocation();
    const { data, isError, isLoading, error } = usePetSpecies();

    if (isLoading) return <div>Loading post...</div>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    const transformedData = {
        items: data?.petList || [],
        listMetadata: data?.listMetadata || {
            totalItems: 0,
            totalPages: 0,
            perPage: 0,
            page: 0,
            baseURL: "/pets"
        }
    };

    return (
        <>
            <ListWithPagination data={ transformedData } title={ `Pet Species : ${ petSpecies }` }
                                renderItem={ (pet: Pet) => <PetListItem key={ pet.id } pet={ pet }/> }/>
        </>
    )
}