import pb from "lib/pocketbase.ts";
import Pet from "models/Pet.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";

export default async function get(petId: string, petRequestQuery: PocketBaseRequestQuery) {
    try {
        return await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(petId, petRequestQuery.exportDataToRecordListOptions()) as Pet;
    } catch (e: any) {
        console.error(e.message);
        throw Error(e.message);
    }
}