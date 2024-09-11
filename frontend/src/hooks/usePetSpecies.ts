import pb from "../lib/pocketbase.ts";
import Pet from "../models/Pet.ts";

import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "../utils/ListPages.ts";
import { useParams } from "react-router-dom";

async function getPetsBelongToSpecies(page: number, species: string) {
    const resultList = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getList(page, import.meta.env.VITE_PB_PET_LIST_SIZE, {
        filter: `adopted = False && species ~ '${ species }'`
    });

    const listMetadata = resultList as ListMetadata;

    const petList = resultList.items.map(function (pet) {
        // @ts-ignore
        return pet as Pet;
    })

    return { petList, listMetadata }
}

export default function usePetSpecies() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    // @ts-ignore
    const page = getCurrentPageNumberFromQueryParameters({});
    const { species } = useParams();
    const petSpecies = String(species);
    return useQuery(['pets', page], () => getPetsBelongToSpecies(page, petSpecies));
}