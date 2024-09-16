import { useMutation } from "react-query";
import { db } from "lib/db.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import { ComparisonOperators } from "../models/RequestQuery/ComparisonOperators.ts";

export default function useAdopt() {
    async function adoptPet(adoptData: AdoptionData) {
        //<editor-fold desc="Check if the pet is adopted">
        const petRequestQuery = new PocketBaseRequestQuery({
            returnFields: "adopt"
        });
        const pet = await db.pet.get(adoptData.pet, petRequestQuery);

        if (pet.adopted) {
            throw new Error('Pet is already adopted by another user.');
        }
        //</editor-fold>

        //<editor-fold desc="Check if the pet have recorded in adoption table">
        const adoptRequestQuery = new PocketBaseRequestQuery({
            fields: {
                pet: { value: adoptData.pet, operator: ComparisonOperators.Equal }
            }
        })

        const resultList = await db.adoption.getFullList(adoptRequestQuery);

        if (resultList.length > 0) {
            throw new Error('Pet is already adopted by another user.');
        }
        //</editor-fold>

        //<editor-fold desc="Change db / add record to db and update pet">
        if (!pet.adopted && resultList.length === 0) {
            await db.adoption.post(adoptData);
            await db.pet.updateAdoptionStateToTrue(adoptData.pet);
        }
        //</editor-fold>
    }

    return useMutation(adoptPet);
}