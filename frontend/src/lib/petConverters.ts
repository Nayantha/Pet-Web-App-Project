import Pet from "models/Pet.ts";
import { ListResult, RecordModel } from "pocketbase";
import pb from "./pocketbase.ts";

export function extractPetListAndListMetadata(resultList: ListResult<RecordModel>) {
    const listMetadata = resultList as ListMetadata;

    const petList = resultList.items.map(function (pet) {
        return recordModelToPet(pet);
    })

    return { petList, listMetadata }
}

export function recordModelToPet(recordModel: RecordModel | Pet) {
    const pet = recordModel as unknown as Pet;
    pet.avatar = pb.files.getUrl(recordModel, recordModel.avatar);
    return pet;
}