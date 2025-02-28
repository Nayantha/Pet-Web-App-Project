import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "utils/ListPages.ts";
import { db } from "lib/db.ts";
import ShelterRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";

export default function useShelters() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    const page = getCurrentPageNumberFromQueryParameters({} as ListMetadata);
    const shelterRequestQuery = new ShelterRequestQuery({
        page: page
    });
    return useQuery(['shelters', page], async () => {
        const resultList = await db.shelters.get(shelterRequestQuery);
        const listMetadata = resultList as ListMetadata;
        const shelterList = resultList.items.map((record) => record as unknown as Shelter);
        return { shelterList, listMetadata };
    });
}