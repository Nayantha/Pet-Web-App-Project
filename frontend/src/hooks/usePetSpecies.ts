import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "utils/ListPages.ts";
import { useParams } from "react-router-dom";
import { db } from "lib/db.ts";
import { extractPetListAndListMetadata } from "lib/petConverters.ts";
import { ComparisonOperators } from "models/RequestQuery/ComparisonOperators.ts";
import PetRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";

export default function usePetSpecies() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    // @ts-ignore
    const page = getCurrentPageNumberFromQueryParameters({});
    const { species } = useParams();
    const petSpecies = String(species);
    const petRequestQuery = new PetRequestQuery({
        fields: {
            adopted: { value: false, operator: ComparisonOperators.Equal },
            species: { value: petSpecies, operator: ComparisonOperators.Like_OR_Contains }
        },
        page: page,
        sort: "-created"
    });
    return useQuery([`pets-${ species }`, page], async () => {
        return extractPetListAndListMetadata(await db.pets.get(petRequestQuery))
    });
}