import pb from "lib/pocketbase.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import {recordModelToAdoptedData} from "lib/adoptionConverters.ts";

export default async function post(adoptionData: AdoptionData, adoptRequestQuery: PocketBaseRequestQuery) {
    return recordModelToAdoptedData(await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).create(adoptionData, adoptRequestQuery.exportDataToRecordListOptions()));
}