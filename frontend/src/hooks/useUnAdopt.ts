import { useMutation } from "react-query";
import PocketBaseRequestQuery from "../models/RequestQuery/PocketBaseRequestQuery.ts";
import { db } from "../lib/db.ts";
import { ComparisonOperators } from "../models/RequestQuery/ComparisonOperators.ts";

export default function () {
    async function unAdoptPet(adoptData: AdoptionData) {
        //<editor-fold desc="Check if the pet is adopted or not">
        const petRequestQuery = new PocketBaseRequestQuery({
            returnFields: "adopt"
        });

        const pet = await db.pet.get(adoptData.pet, petRequestQuery);

        if (!pet.adopted) {
            throw Error('Pet is not adopted by any user.');
        }
        //</editor-fold>

        //<editor-fold desc="Check records of pet in adoption table">
        const adoptRequestQuery = new PocketBaseRequestQuery({
            fields: {
                pet: { value: adoptData.pet, operator: ComparisonOperators.Equal }
            }
        })

        const resultList = await db.adoption.getFullList(adoptRequestQuery);

        if (resultList.length == 0) {
            throw Error('Pet is not adopted by any user.');
        } else if (resultList.length != 1) {
            throw Error('Database Error.');
        }
        //</editor-fold>

        //<editor-fold desc="Un Adopt the pet">
        const adoptedData = resultList[0];

        if (!adoptedData.verified && pet.adopted && resultList.length == 1) {
            await db.adoption.erase(adoptedData);
            await db.pet.updateAdoptionStateToFalse(adoptData.pet);
        } else {
            throw Error("Error in un adopting process.")
        }
        //</editor-fold>
    }

    return useMutation(unAdoptPet);
}