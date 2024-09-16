import get from "./pet/get.ts";
import { updateAdoptionStateToFalse, updateAdoptionStateToTrue } from "./pet/update.ts"

export const pet = {
    get,
    updateAdoptionStateToTrue,
    updateAdoptionStateToFalse
};
