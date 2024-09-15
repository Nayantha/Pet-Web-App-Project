import pb from "lib/pocketbase.ts";
import PetRequestQuery from "models/RequestQuery/PetRequestQuery.ts";

export default async function get(page: number, petRequestQuery: PetRequestQuery) {
    try {
        return await pb.collection(import.meta.env.VITE_PB_PET_TABLE)
            .getList(page, import.meta.env.VITE_PB_PET_LIST_SIZE, {
                filter: petRequestQuery.convertToQueryString()
            });
    } catch (error) {
        console.error('Error fetching pet list:', error);
        throw error;
    }
}