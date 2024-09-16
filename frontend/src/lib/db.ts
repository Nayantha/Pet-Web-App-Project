import { pets } from './db/pets.ts';
import { pet } from "./db/pet.ts";
import { adoption } from "./db/adoption.ts";

export const db = {
    pets,
    pet,
    adopt: adoption
};
