import { useLocation } from "react-router-dom";
import useShelter from "hooks/useShelter.ts";
import ShelterComponent from "components/ShelterComponent.tsx";
import CenteredSpinner from "components/CenteredSpinner.tsx";
import usePetsOfAShelter from "hooks/usePetsOfAShelter.ts";
import ListWithPagination from "components/ListWithPagination.tsx";
import Pet from "models/Pet.ts";
import PetListItem from "components/PetListItem.tsx";

export default function ShelterPage() {
    const location = useLocation();
    let shelterId = location.state?.id;
    const currentPath = location.pathname;

    if (!shelterId) {
        const searchParams = new URLSearchParams(location.search);
        shelterId = searchParams.get("id");
    }

    const {
        data: shelter,
        isError: isFetchingShelterError,
        isLoading: isFetchingShelterLoading,
        error: fetchingShelterError
    } = useShelter(shelterId);
    const {
        data,
        isError: isPetsOfShelterDataFetchError,
        isLoading: isPetsOfShelterDataFetchLoading,
        error: petsofShelterDataFetchError
    } = usePetsOfAShelter(shelterId);

    if (isFetchingShelterLoading || isPetsOfShelterDataFetchLoading) return <CenteredSpinner/>;
    if (isFetchingShelterError) { // @ts-ignore
        return <div>Error: { fetchingShelterError.message }</div>;
    }

    if (isPetsOfShelterDataFetchError) { // @ts-ignore
        return <div>Error: { petsofShelterDataFetchError.message }</div>;
    }

    const transformedData = {
        items: data?.petList || [],
        listMetadata: data?.listMetadata || {
            totalItems: 0,
            totalPages: 0,
            perPage: 0,
            page: 0,
            baseURL: currentPath
        }
    };

    transformedData.listMetadata.baseURL = currentPath;

    return (
        <>
            <ShelterComponent shelter={ shelter ?? {} as Shelter }/>
            <ListWithPagination data={ transformedData }
                                renderItem={ (pet: Pet) => <PetListItem key={ pet.id } pet={ pet }/> }
                                title={ `Pets Of Shelter ${ shelter?.name }` }/>
        </>
    )
}