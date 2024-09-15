import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "../utils/ListPages.ts";
import { useParams } from "react-router-dom";
import { db } from "lib/db.ts";
import { extractPetListAndListMetadata } from "../lib/petConverters.ts";

async function getPetsBelongToSpecies(page: number, species: string) {
    return extractPetListAndListMetadata(await db.pet.get(page, species));
}

export default function usePetSpecies() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    // @ts-ignore
    const page = getCurrentPageNumberFromQueryParameters({});
    const { species } = useParams();
    const petSpecies = String(species);
    return useQuery(['pets', page], () => getPetsBelongToSpecies(page, petSpecies));
}