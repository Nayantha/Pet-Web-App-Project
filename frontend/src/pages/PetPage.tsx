import pb from "lib/pocketbase.ts";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

export default function PetPage() {
    const { id } = useParams();

    const { data, isLoading, isError, error } = useQuery('pet', () => fetchPet(id));

    async function fetchPet(id: string | undefined) {

        if (id != null) {
            const record = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(id);
            // @ts-ignore
            return record as PetInterface;
        } else {
            window.location.href = "/";
        }

    }

    if (isLoading) return <div>Loading post...</div>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <>
            <PetComponent pet={ data as PetInterface }/>
        </>
    )
}