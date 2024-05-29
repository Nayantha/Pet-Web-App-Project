import pb from "../lib/pocketbase.ts";
import { Pet as PetInterface } from "../models/Pet.ts";

import { useQuery } from 'react-query';
import { getCurrentPageNumberFromQueryParameters } from "../utils/ListPages.ts";

async function getPets(page: number) {
    const resultList = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getList(page, import.meta.env.VITE_PB_PET_LIST_SIZE);

    const listMetadata = resultList as ListMetadata;

    const petList = resultList.items.map(function (pet) {
        // @ts-ignore
        return pet as PetInterface;
    })

    return { petList, listMetadata }
}

export default function usePets() {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    // @ts-ignore
    const page = getCurrentPageNumberFromQueryParameters({});
    return useQuery(['pets', page], () => getPets(page));
}