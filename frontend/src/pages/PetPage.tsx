import pb from "lib/pocketbase.ts";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/react";

export default function PetPage() {
    const {id} = useParams();

    const {data, isLoading, isError, error} = useQuery('pet', () => fetchPet(id));

    async function fetchPet(id: string | undefined): Promise<PetInterface | undefined> {

        try {
            if (id === null || id === "") {
                Error("null id error");
            }
            return await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(id as string);
        } catch (e) {
            window.location.href = "/";
        }

    }

    if (isLoading) return <Spinner/>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <>
            <PetComponent pet={ data as PetInterface }/>
        </>
    )
}