import { useLocation, useParams } from "react-router-dom";
import usePetSpecies from "hooks/usePetSpecies.ts"
import "assets/PetList.css";
import Pet from "../../models/Pet.ts";
import PetListWithPagination from "../../components/PetListWithPagination.tsx";

export default function PetSpeciesList() {
    const { species } = useParams();
    const petSpecies = String(species);

    // auto injected into the request query parameter finding function
    // @ts-ignore
    const location = useLocation();
    const { data, isError, isLoading, error } = usePetSpecies();

    const defaultData = {
        petList: [] as Pet[],
        listMetadata: {
            totalItems: 0,
            totalPages: 0,
            perPage: 10,
            page: 1,
            baseURL: `/pets/species/${ petSpecies }`
        } as ListMetadata,
    };

    if (data?.listMetadata) {
        data.listMetadata.baseURL = defaultData.listMetadata.baseURL;
    }

    if (isLoading) return <div>Loading post...</div>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <>
            <PetListWithPagination data={ data ?? defaultData } title={ `Pet Species : ${ petSpecies }` }/>
        </>
    )
}