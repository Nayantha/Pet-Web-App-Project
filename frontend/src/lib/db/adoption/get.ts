import AdoptedData from "models/AdoptedData.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import pb from "lib/pocketbase.ts";

const ADOPTION_TABLE = import.meta.env.VITE_PB_ADOPTION_TABLE;

export async function getFirstOfList(adoptRequestQuery: PocketBaseRequestQuery) {
    try {
        return await pb.collection(ADOPTION_TABLE).getFirstListItem(adoptRequestQuery.convertToQueryString()) as AdoptedData;
    } catch (e: any) {
        const newAdoptionData = {} as AdoptedData;
        newAdoptionData.verified = false;
        return newAdoptionData;
    }
}

export async function getFullList(adoptRequestQuery: PocketBaseRequestQuery) {
    return await pb.collection(ADOPTION_TABLE).getFullList(adoptRequestQuery.exportDataToRecordListOptions()) as AdoptedData[];
}