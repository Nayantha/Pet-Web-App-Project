import Pet from "models/Pet.ts";
import { ListResult, RecordModel } from "pocketbase";

export function extractPetListAndListMetadata(resultList: ListResult<RecordModel>) {
    const listMetadata = resultList as ListMetadata;

    const petList = resultList.items.map(function (pet) {
        // @ts-ignore
        return pet as Pet;
    })

    return { petList, listMetadata }
}