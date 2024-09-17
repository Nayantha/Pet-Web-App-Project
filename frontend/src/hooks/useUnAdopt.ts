import { useMutation } from "react-query";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import { db } from "lib/db.ts";
import AdoptedData from "models/AdoptedData.ts";

export default function () {
    async function unAdoptPet(adoptedData: AdoptedData) {
        const adoptRequestQuery = new PocketBaseRequestQuery({
            expand: "pet"
        });

        const adoptRecordTableData = await db.adoption.getOne(adoptedData.id, adoptRequestQuery);

        if (!adoptRecordTableData.verified && adoptRecordTableData.pet.adopted && adoptRecordTableData.user == adoptedData.user) {
            await db.adoption.erase(adoptRecordTableData.id);
            await db.pet.updateAdoptionStateToFalse(adoptRecordTableData.pet.id);
        } else {
            throw Error("Error in un adopting process.")
        }
    }

    return useMutation(unAdoptPet);
}