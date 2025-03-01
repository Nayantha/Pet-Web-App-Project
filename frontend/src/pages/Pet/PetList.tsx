import { useLocation } from "react-router-dom";
import usePets from "hooks/usePets.ts";
import "assets/List.css";
import ListWithPagination from "components/ListWithPagination.tsx";
import Pet from "models/Pet.ts";
import CenteredSpinner from "components/CenteredSpinner.tsx";
import PetListItem from "components/PetListItem.tsx";

export default function PetList() {
    // auto-injected into the request query parameter finding function
    useLocation();
    const { data, isError, isLoading, error } = usePets();

    if (isLoading) return <CenteredSpinner/>;
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
            <ListWithPagination data={ transformedData } title={ "Pets" }
                                renderItem={ (pet: Pet) => <PetListItem key={ pet.id } pet={ pet }/> }/>
        </>
    )
}