import pb from "lib/pocketbase.ts";

import { useEffect, useState } from "react";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";

export default function PetList() {
    const [pets, setPets] = useState<PetInterface[]>([]);

    async function getPets() {
        const resultList = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getList(1, import.meta.env.VITE_PB_PET_LIST_SIZE);

        const petList = resultList.items.map(function (pet) {
            // @ts-ignore
            return pet as PetInterface;
        })
        console.log(petList);
        setPets(petList);
    }

    useEffect(() => {
        getPets();
    }, [])

    return (
        <>
            {pets.map((pet) => (
                <PetComponent pet={pet}/>
            ))}
        </>
    )
}