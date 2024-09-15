import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "utils/ListPages.ts";
import { useParams } from "react-router-dom";
import { db } from "lib/db.ts";
import { extractPetListAndListMetadata } from "lib/petConverters.ts";
import PetRequestQuery from "models/RequestQuery/PetRequestQuery.ts";
import { ComparisonOperators } from "../models/RequestQuery/ComparisonOperators.ts";

async function getPetsBelongToSpecies(page: number, petRequestQuery: PetRequestQuery) {
    return extractPetListAndListMetadata(await db.pets.get(page, petRequestQuery));
}

export default function usePetSpecies() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    // @ts-ignore
    const page = getCurrentPageNumberFromQueryParameters({});
    const { species } = useParams();
    const petSpecies = String(species);
    const petRequestQuery = new PetRequestQuery({
        adopted: { value: false, operator: ComparisonOperators.Equal },
        species: { value: petSpecies, operator: ComparisonOperators.Like_OR_Contains }
    });
    return useQuery([`pets-${ species }`, page], () => getPetsBelongToSpecies(page, petRequestQuery));
}