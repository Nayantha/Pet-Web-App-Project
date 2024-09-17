import pb from "lib/pocketbase.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import { recordModelToPet } from "lib/petConverters.ts";

export default async function get(petId: string, petRequestQuery: PocketBaseRequestQuery) {
    return recordModelToPet(await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(petId, petRequestQuery.exportDataToRecordListOptions()));
}