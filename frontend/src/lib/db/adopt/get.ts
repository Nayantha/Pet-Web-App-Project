import AdoptedData from "models/AdoptedData.ts";
import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import pb from "lib/pocketbase.ts";

export default async function (adoptRequestQuery: PocketBaseRequestQuery) {
    return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).getFirstListItem(adoptRequestQuery.convertToQueryString()) as AdoptedData;
}