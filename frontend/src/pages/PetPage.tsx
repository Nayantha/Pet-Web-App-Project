import pb from "lib/pocketbase.ts";

import {useEffect, useState} from "react";
import {Pet as PetInterface} from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";

export default function PetPage() {
    const [pet, setPet] = useState<PetInterface>({
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
        const record = await pb.collection('pets').getOne('l2ov1h6ju1itl48');
        // @ts-ignore
        const pet = record as PetInterface;
        console.log(pet);
        setPet(pet);
    }

    useEffect(() => {
        getPet();
    }, [])

    return (
        <>
            <PetComponent pet={pet}/>
        </>
    )
}