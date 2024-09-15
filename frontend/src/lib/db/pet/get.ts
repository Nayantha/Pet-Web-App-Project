import pb from "lib/pocketbase.ts";

export default async function get(page: number, species: string) {
    try {
        return await pb.collection(import.meta.env.VITE_PB_PET_TABLE)
            .getList(page, import.meta.env.VITE_PB_PET_LIST_SIZE, {
                filter: `adopted = False && species ~ '${ species }'`
            });
    } catch (error) {
        console.error('Error fetching pet list:', error);
        throw error;
    }
}