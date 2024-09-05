import pb from "lib/pocketbase.ts";
import { Pet as PetInterface } from "../models/Pet.ts";
import PetComponent from "../components/PetComponent.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/react";
import { AdoptedData } from "../models/AdoptedData.ts";

export default function PetPage() {
    const { id } = useParams();

    if (!id) {
        window.location.href = "/";
    }

    const petId = String(id);

    const {
        data: adoptionData,
        isLoading,
        isError,
        error
    } = useQuery<AdoptedData>(`pet-${ petId }`, () => fetchData(petId, pb.authStore.model?.id));

    async function fetchData(petId: string, userId: string) {
        const pet = await fetchPet(petId);
        const adoptionData = await fetchAdoptData(petId, userId);
        adoptionData.pet = pet;
        console.log(pb.authStore.model)
        return adoptionData;
    }

    async function fetchAdoptData(petId: string, userId: string) {
        try {
            return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).getFirstListItem(`pet = "${ petId }" && user = "${ userId }"`) as AdoptedData;

        } catch (e: any) {
            console.error(e.message);
            window.location.href = "/";
        }
        return {} as AdoptedData;
    }

    async function fetchPet(petId: string): Promise<PetInterface> {

        try {
            return await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(petId as string);
        } catch (e: any) {
            console.log(e.message);
        }
        return {} as PetInterface;
    }

    if (isLoading) return <Spinner/>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <>
            <PetComponent pet={ adoptionData?.pet ?? {} as PetInterface }/>
        </>
    )
}