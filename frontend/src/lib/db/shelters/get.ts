import pb from "lib/pocketbase.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";

export default async function get(shelterRequestQuery: PocketBaseRequestQuery) {
    try {
        const resultList = await pb.collection('shelters').getList(1, 50,);
        console.log(resultList);
        return await pb.collection(import.meta.env.VITE_PB_SHELTER_TABLE)
            .getList(shelterRequestQuery.page, shelterRequestQuery.perPage, shelterRequestQuery.exportDataToRecordListOptions());
    } catch (error) {
        console.error('Error fetching shelter list:', error);
        throw error;
    }
}