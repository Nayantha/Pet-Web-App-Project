import PetRequestQuery from "../models/RequestQuery/PocketBaseRequestQuery.ts";
import RequestQuery from "../models/RequestQuery/PocketBaseRequestQuery.ts";
import { db } from "../lib/db.ts";
import { ComparisonOperators } from "../models/RequestQuery/ComparisonOperators.ts";
import { useQuery } from "react-query";

export default function (adoptionData: AdoptionData) {
    return useQuery([`pet-${ adoptionData.pet }`], async () => {
        const pet = await db.pet.get(adoptionData.pet, new PetRequestQuery({}));

        const shelter = await db.shelter.get(pet.shelter_id);

        const adoptionRequestQuery = new RequestQuery({
            fields: {
                pet: { value: adoptionData.pet, operator: ComparisonOperators.Equal },
                user: { value: adoptionData.user, operator: ComparisonOperators.Equal }
            }
        });
        const adoptedData = await db.adoption.getFirstOfList(adoptionRequestQuery);
        adoptedData.pet = pet;
        adoptedData.shelter = shelter;
        return adoptedData;
    });
}