import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "utils/ListPages.ts";
import { extractPetListAndListMetadata } from "lib/petConverters.ts";
import { db } from "lib/db.ts";
import PetRequestQuery from "models/RequestQuery/PetRequestQuery.ts";
import { ComparisonOperators } from "models/RequestQuery/ComparisonOperators.ts";

export default function usePets() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    // @ts-ignore
    const page = getCurrentPageNumberFromQueryParameters({});
    const petRequestQuery = new PetRequestQuery({
        adopted: { value: false, operator: ComparisonOperators.Equal }
    });
    return useQuery(['pets', page], async () => {
        return extractPetListAndListMetadata(await db.pets.get(page, petRequestQuery))
    });
}