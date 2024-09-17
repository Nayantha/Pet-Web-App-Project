import { ListResult, RecordModel } from "pocketbase";
import ExpandedAdoptedData from "models/ExpandedAdoptedData.ts";
import { recordModelToPet } from "./petConverters.ts";

export function extractAdoptedDataListAndListMetadata(resultList: ListResult<RecordModel>) {
    const listMetadata = resultList as ListMetadata;

    const expandedAdoptedDataList = resultList.items.map(function (adoptedData) {
        return recordModelToAdoptedData(adoptedData);
    })

    return { expandedAdoptedDataList, listMetadata }
}

export function recordModelToAdoptedData(recordModel: RecordModel) {
    const adoptedData = recordModel as unknown as ExpandedAdoptedData;
    if (adoptedData.expand?.pet) {
        adoptedData.pet = recordModelToPet(adoptedData.expand.pet);
    }
    if (adoptedData.expand?.user) {
        adoptedData.user = adoptedData.expand.user;
    }
    return adoptedData;
}