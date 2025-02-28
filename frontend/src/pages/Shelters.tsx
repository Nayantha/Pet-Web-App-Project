import { useLocation } from "react-router-dom";
import "assets/PetList.css";
import ListWithPagination from "components/ListWithPagination.tsx";
import CenteredSpinner from "components/CenteredSpinner.tsx";
import useShelters from "../hooks/useShelters.ts";
import ShelterListItem from "../components/ShelterListItem.tsx";

export default function PetShelterList() {
    // auto-injected into the request query parameter finding function
    useLocation();
    const { data, isError, isLoading, error } = useShelters();


    if (isLoading) return <CenteredSpinner/>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    const transformedData = {
        items: data?.shelterList || [],
        listMetadata: data?.listMetadata || {
            totalItems: 0,
            totalPages: 0,
            perPage: 0,
            page: 0,
            baseURL: "/shelters"
        }
    };

    return (
        <>
            <ListWithPagination data={ transformedData } title={ "Shelters" }
                                renderItem={ (shelter: Shelter) => <ShelterListItem key={ shelter.id }
                                                                                    shelter={ shelter }/> }/>
        </>
    )
}