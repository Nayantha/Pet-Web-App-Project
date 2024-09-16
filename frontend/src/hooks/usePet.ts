import PetRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import { useQuery } from "react-query";
import { db } from "lib/db.ts";

export default function usePet(petId: string) {
    const petRequestQuery = new PetRequestQuery({
        returnFields: "adopt"
    });
    return useQuery(['pet'], async () => {
        return await db.pet.get(petId, petRequestQuery);
    });
}