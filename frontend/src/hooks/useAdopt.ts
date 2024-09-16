import { useMutation } from "react-query";
import { db } from "lib/db.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import pb from "../lib/pocketbase.ts";

export default function useAdopt() {
    async function adoptPet(adoptData: AdoptionData) {
        const petRequestQuery = new PocketBaseRequestQuery({
            returnFields: "adopt"
        });
        const pet = await db.pet.get(adoptData.petId, petRequestQuery);

        if (pet.adopted) {
            throw new Error('Pet is already adopted by another user.');
        }

        const resultList = await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).getFullList({
            filter: 'pet = "' + adoptData.petId + '"',
        });

        if (resultList.length > 0) {
            throw new Error('Pet is already adopted by another user.');
        }

        if (!pet.adopted && resultList.length === 0) {
            //     // this conversion is required because the keywords used make sense in the database layer
            //     const data = {
            //         pet: adoptData.petId,
            //         user: adoptData.userId
            //     }
            //     await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).create(data);
            //     await pb.collection(import.meta.env.VITE_PB_PET_TABLE).update(adoptData.petId, {
            //         adopted: true,
            //     });
        }
    }

    return useMutation(adoptPet);
}