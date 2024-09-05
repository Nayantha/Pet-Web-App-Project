// this interface holds data / record from pet adoption table
import { Pet } from "./Pet.ts";

export default interface AdoptedData {
    id: string;
    pet: Pet;
    updated: Date;
    created: Date;
    user: string;
    verified: boolean;
}
