import { useQuery } from "react-query";
import { db } from "lib/db.ts";

export default function useShelter(shelterId: string) {
    return useQuery(['pet'], async () => {
        return await db.shelter.get(shelterId);
    });
}