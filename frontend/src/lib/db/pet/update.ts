import pb from "../../pocketbase.ts";

export async function updateAdoptionStateToTrue(petId: string) {
    await pb.collection(import.meta.env.VITE_PB_PET_TABLE).update(petId, {
        adopted: true,
    });
}