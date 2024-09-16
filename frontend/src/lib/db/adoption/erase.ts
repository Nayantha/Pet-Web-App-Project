import pb from "../../pocketbase.ts";
import AdoptedData from "models/AdoptedData.ts";

export default async function (adoptData: AdoptedData) {
    return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).delete(adoptData.id);
}