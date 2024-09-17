import { useLocation } from "react-router-dom";
import AdoptedDataTable from "components/AdoptedDataTable.tsx";
import useAdoptionList from "hooks/useAdoptionList.ts";
import ExpandedAdoptedData from "models/ExpandedAdoptedData.ts";

export default function () {
    // auto-injected into the request query parameter finding function
    useLocation();
    const { data, isError, isLoading, error } = useAdoptionList();

    const defaultData = {
        expandedAdoptedDataList: [] as ExpandedAdoptedData[],
        listMetadata: {
            totalItems: 0,
            totalPages: 0,
            perPage: 12,
            page: 1,
            baseURL: '/adoptions'
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
            <AdoptedDataTable data={ data ?? defaultData }/>
        </>
    )
}