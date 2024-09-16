import AdoptedData from "models/AdoptedData.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import pb from "lib/pocketbase.ts";

export async function getFirstOfList(adoptRequestQuery: PocketBaseRequestQuery) {
    return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).getFirstListItem(adoptRequestQuery.convertToQueryString()) as AdoptedData;
}

export async function getFullList(adoptRequestQuery: PocketBaseRequestQuery) {
    return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).getFullList(adoptRequestQuery.exportDataToRecordListOptions()) as AdoptedData[];
}