import { useLocation } from "react-router-dom";
import usePets from "../../hooks/usePets.ts";
import "assets/PetList.css";
import PetListWithPagination from "../../components/PetListWithPagination.tsx";
import Pet from "../../models/Pet.ts";

export default function PetList() {
    // auto-injected into the request query parameter finding function
    // @ts-ignore
    useLocation();
    const { data, isError, isLoading, error } = usePets();

    const defaultData = {
        petList: [] as Pet[],
        listMetadata: {
            totalItems: 0,
            totalPages: 0,
            perPage: 10,
            page: 1,
            baseURL: '/pets'
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
            <PetListWithPagination data={ data ?? defaultData } title={ "Pets" }/>
        </>
    )
}