import pb from "../lib/pocketbase.ts";
import { useMutation } from "react-query";

export default function useAdopt() {
    async function adoptPet(adoptData: AdoptionData) {
        const adoptedState = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(adoptData.petId, {
            fields: 'adopted',
        });

        if (adoptedState.adopted) {
            throw new Error('Pet is already adopted by another user.');
        }

        const resultList = await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).getFullList({
            filter: 'pet = "' + adoptData.petId + '"',
        });

        if (resultList.length > 0) {
            throw new Error('Pet is already adopted by another user.');
        }

        if (!adoptedState.adopted && resultList.length === 0) {
            // this conversion is required because the keywords used make sense in the database layer
            const data = {
                pet: adoptData.petId,
                user: adoptData.userId
            }
            await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).create(data);
        }

    }

    return useMutation(adoptPet);
}