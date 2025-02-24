import AdoptedData from "models/AdoptedData.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import pb from "lib/pocketbase.ts";
import { recordModelToAdoptedData } from "../../adoptionConverters.ts";

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

export async function getList(adoptRequestQuery: PocketBaseRequestQuery) {
    return await pb.collection(ADOPTION_TABLE).getList(adoptRequestQuery.page, 10, adoptRequestQuery.exportDataToRecordListOptions());
}

export async function getOne(adoptId: string, adoptRequestQuery: PocketBaseRequestQuery) {
    return recordModelToAdoptedData(await pb.collection(ADOPTION_TABLE).getOne(adoptId, adoptRequestQuery.exportDataToRecordListOptions()));
}