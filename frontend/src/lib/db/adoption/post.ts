import pb from "lib/pocketbase.ts";

export default async function post(adoptData: AdoptionData) {
    return await pb.collection(import.meta.env.VITE_PB_ADOPTION_TABLE).create(adoptData);
}