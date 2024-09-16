import PetComponent from "../../components/PetComponent.tsx";
import { useParams } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import AdoptedData from "models/AdoptedData.ts";
import useGetAdoptedData from "hooks/useGetAdoptedData.ts";
import pb from "lib/pocketbase.ts";

export default function PetPage() {
    const { id } = useParams();

    if (!id) {
        window.location.href = "/";
    }

    const petId = String(id);
    const userId = pb.authStore.model?.id;

    const {
        data: adoptionData, isLoading, isError, error
    } = useGetAdoptedData({ pet: petId, user: userId });


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