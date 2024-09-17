import pb from "../../pocketbase.ts";

export default async function (adoptDataID: string) {
    return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).delete(adoptDataID);
}