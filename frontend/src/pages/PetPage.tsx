import pb from "lib/pocketbase.ts";

import { useEffect, useState } from "react";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";
import { useParams } from "react-router-dom";

export default function PetPage() {
    const { id } = useParams();
    const [pet, setPet] = useState<PetInterface>({
        adopted: false,
        baseColor: "",
        breed: "",
        gender: "",
        id: "",
        intakeDate: "",
        intakeReason: "",
        species: "",
        name: ""
    });

    async function getPet() {
        const record = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(id);
        // @ts-ignore
        const pet = record as PetInterface;
        setPet(pet);
    }

    useEffect(() => {
        getPet();
    }, [])

    return (
        <>
            <p>{ id }</p>
            <PetComponent pet={ pet }/>
        </>
    )
}