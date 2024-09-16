import pb from "lib/pocketbase.ts";

export default async function post(adoptData: AdoptionData) {
    const adoptedState = await pb.collection(import.meta.env.VITE_PB_PET_TABLE).getOne(adoptData.pet, {
        fields: 'adopted',
    });
    console.log(adoptedState);
}