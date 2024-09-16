import pb from "lib/pocketbase.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";

export default async function get(petRequestQuery: PocketBaseRequestQuery) {
    try {
        return await pb.collection(import.meta.env.VITE_PB_PET_TABLE)
            .getList(petRequestQuery.page, petRequestQuery.perPage, petRequestQuery.exportDataToRecordListOptions());
    } catch (error) {
        console.error('Error fetching pet list:', error);
        throw error;
    }
}