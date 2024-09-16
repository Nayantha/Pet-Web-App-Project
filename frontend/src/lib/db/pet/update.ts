import pb from "../../pocketbase.ts";

export async function updateAdoptionStateToTrue(petId: string) {
    await pb.collection(import.meta.env.VITE_PB_PET_TABLE).update(petId, {
        adopted: true,
    });
}

export async function adoptionThePet(petId: string) {
    await pb.collection(import.meta.env.VITE_PB_PET_TABLE).update(petId, {
        adopted: true,
    });
}

export async function updateAdoptionStateToFalse(petId: string) {
    await pb.collection(import.meta.env.VITE_PB_PET_TABLE).update(petId, {
        adopted: false,
    });
}

export async function UnAdoptionThePet(petId: string) {
    await pb.collection(import.meta.env.VITE_PB_PET_TABLE).update(petId, {
        adopted: false,
    });
}