import pb from "lib/pocketbase.ts";

import { useEffect, useState } from "react";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";
import Pagination from "../components/Pagination.tsx";
import { useLocation } from "react-router-dom";
import { ListResult, RecordModel } from "pocketbase";

export default function PetList() {
    const [pets, setPets] = useState<PetInterface[]>([]);
    const [metadata, setMetadata] = useState<ListMetadata>({
        page: 0,
        perPage: 0,
        totalItems: 0,
        totalPages: 0
    });
    const location = useLocation();

    function setMetadataIfEmpty(resultList: ListResult<RecordModel>) {
        const isResultListEmpty =
            resultList &&
            Object.values(resultList).every((value) => value === 0);

        if (isResultListEmpty) {
            // Set default metadata if the resultList is empty or all properties are 0
            setMetadata({ page: 0, perPage: 0, totalItems: 0, totalPages: 0 } as ListMetadata);
        } else {
            setMetadata(resultList as ListMetadata);
        }
    }

    function getCurrentPageNumberFromQueryParameters(): number {
        const queryParams = new URLSearchParams(location.search);
        let page: number;

        const pageParam = queryParams.get('p');
        if (pageParam !== null && pageParam !== undefined) {
            page = +pageParam || 1;
        } else {
            page = 1;
        }

        // Check if the page is less than or equal to zero, or larger than totalPages
        if (page <= 0 || page > metadata.totalPages) {
            page = 1; // Set page to one if it's invalid
        }
        return page;
    }

    async function getPets() {

        const page = getCurrentPageNumberFromQueryParameters();

        const resultList = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getList(page, import.meta.env.VITE_PB_PET_LIST_SIZE);

        // using this, we can only set the metadata values once and use on all pages.
        setMetadataIfEmpty(resultList);

        const petList = resultList.items.map(function (pet) {
            // @ts-ignore
            return pet as PetInterface;
        })

        setPets(petList);
    }

    useEffect(() => {
        getPets();
    }, [location.search])

    return (
        <>
            <Pagination metadata={ metadata }/>
            { pets.map((pet) => (
                <PetComponent key={ pet.id } pet={ pet }/>
            )) }
        </>
    )
}