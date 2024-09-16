import { useMutation } from "react-query";
import { db } from "lib/db.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import { ComparisonOperators } from "../models/RequestQuery/ComparisonOperators.ts";

export default function useAdopt() {
    async function adoptPet(adoptData: AdoptionData) {
        const petRequestQuery = new PocketBaseRequestQuery({
            returnFields: "adopt"
        });
        const pet = await db.pet.get(adoptData.pet, petRequestQuery);

        if (pet.adopted) {
            throw new Error('Pet is already adopted by another user.');
        }

        const adoptRequestQuery = new PocketBaseRequestQuery({
            fields: {
                pet: { value: adoptData.pet, operator: ComparisonOperators.Equal }
            }
        })

        const resultList = await db.adoption.getFullList(adoptRequestQuery);

        if (resultList.length > 0) {
            throw new Error('Pet is already adopted by another user.');
        }

        if (!pet.adopted && resultList.length === 0) {
            await db.adoption.post(adoptData);
            await db.pet.updateAdoptionStateToTrue(adoptData.pet);
        }
    }

    return useMutation(adoptPet);
}