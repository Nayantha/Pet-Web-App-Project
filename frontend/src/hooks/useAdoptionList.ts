import PocketBaseRequestQuery from "models/RequestQuery/PocketBaseRequestQuery.ts";
import { getCurrentPageNumberFromQueryParameters } from "../utils/ListPages.ts";
import { ComparisonOperators } from "models/RequestQuery/ComparisonOperators.ts";
import pb from "lib/pocketbase.ts";
import { useQuery } from "react-query";
import { db } from "lib/db.ts";
import { extractAdoptedDataListAndListMetadata } from "lib/adoptionConverters.ts";

export default function () {
    // Do not initialize metadata instance which will lead to a not data fetching in the hook when page changes
    const page = getCurrentPageNumberFromQueryParameters({} as ListMetadata);
    const user = pb.authStore.model?.id ?? "";
    const adoptionRequestQuery = new PocketBaseRequestQuery({
        fields: { user: { value: user, operator: ComparisonOperators.Equal } },
        page: page,
        expand: "pet"
    });
    return useQuery(['adoptions', user, page], async () => {
        return extractAdoptedDataListAndListMetadata(await db.adoption.getList(adoptionRequestQuery));
    });
}