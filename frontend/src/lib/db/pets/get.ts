import pb from "lib/pocketbase.ts";
import PetRequestQuery from "models/RequestQuery/PetRequestQuery.ts";

export default async function get(petRequestQuery: PetRequestQuery) {
    try {
        return await pb.collection(import.meta.env.VITE_PB_PET_TABLE)
            .getList(petRequestQuery.page, petRequestQuery.perPage, petRequestQuery.exportDataToRecordListOptions());
    } catch (error) {
        console.error('Error fetching pet list:', error);
        throw error;
    }
}