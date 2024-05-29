import pb from "lib/pocketbase.ts";

import { useEffect, useState } from "react";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";
import Pagination from "../components/Pagination.tsx";
import { useLocation } from "react-router-dom";
import { getCurrentPageNumberFromQueryParameters } from "../utils/ListPages.ts";
import { SimpleGrid } from "@chakra-ui/react";

export default function PetList() {
    const [pets, setPets] = useState<PetInterface[]>([]);
    const [metadata, setMetadata] = useState<ListMetadata>({
        page: 0,
        perPage: 0,
        totalItems: 0,
        totalPages: 0
    });
    const location = useLocation();

    async function getPets() {

        const page = getCurrentPageNumberFromQueryParameters(metadata);

        const resultList = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getList(page, import.meta.env.VITE_PB_PET_LIST_SIZE);

        const listMetadata = resultList as ListMetadata;

        const petList = resultList.items.map(function (pet) {
            // @ts-ignore
            return pet as PetInterface;
        })

        return { petList, listMetadata }
    }

    useEffect(() => {

        (async () => {
            const { petList, listMetadata } = await getPets();
            setPets(petList);
            setMetadata(listMetadata);
        })();

    }, [location.search])

    return (
        <>
            <Pagination metadata={ metadata }/>
            <SimpleGrid columns={ 2 } spacing={ 10 }>
                { pets.map((pet) => (
                    <PetComponent key={ pet.id } pet={ pet }/>
                )) }
            </SimpleGrid>
        </>
    )
}