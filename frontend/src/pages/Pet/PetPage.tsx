import pb from "lib/pocketbase.ts";
import PetComponent from "../../components/PetComponent.tsx";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/react";
import AdoptedData from "../../models/AdoptedData.ts";
import PetRequestQuery from "../../models/RequestQuery/PocketBaseRequestQuery.ts";
import { db } from "../../lib/db.ts";
import { ComparisonOperators } from "../../models/RequestQuery/ComparisonOperators.ts";
import { ClientResponseError } from "pocketbase";

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
        return adoptionData;
    }

    async function fetchAdoptData(petId: string, userId: string) {
        try {
            const petRequestQuery = new PetRequestQuery({
                fields: {
                    pet: { value: petId, operator: ComparisonOperators.Equal },
                    user: { value: userId, operator: ComparisonOperators.Equal }
                }
            });
            return await db.adopt.get(petRequestQuery);
        } catch (e: any) {
            console.error(e);
            if (e instanceof ClientResponseError) {
                const newAdoptionData = {} as AdoptedData;
                newAdoptionData.verified = false;
                return newAdoptionData;
            } else {
                window.location.href = "/";
            }
        }
        return {} as AdoptedData;
    }

    async function fetchPet(petId: string) {
        try {
            const petRequestQuery = new PetRequestQuery({
                returnFields: "adopt"
            });
            return await db.pet.get(petId, petRequestQuery);
        } catch (e: any) {
            throw Error(e.message);
        }
    }

    if (isLoading) return <Spinner/>;
    if (isError) { // @ts-ignore
        return <div>Error: { error.message }</div>;
    }

    return (
        <>
            <PetComponent adoptedData={ adoptionData ?? {} as AdoptedData }/>
        </>
    )
}