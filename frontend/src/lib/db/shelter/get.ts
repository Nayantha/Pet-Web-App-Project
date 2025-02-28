import pb from "lib/pocketbase.ts";

export default async function get(shelterId: string) {
    return await pb.collection(import.meta.env.VITE_PB_SHELTER_TABLE).getOne(shelterId) as Shelter;
}