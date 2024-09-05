// this interface holds data / record from pet adoption table
import { Pet } from "./Pet.ts";
import User from "./User.ts";

export default interface AdoptedData {
    id: string;
    pet: Pet;
    updated: Date;
    created: Date;
    user: User;
    verified: boolean;
}
