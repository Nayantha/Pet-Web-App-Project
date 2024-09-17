import post from "./adoption/post.ts";
import { getFirstOfList, getFullList, getList } from "./adoption/get.ts";
import erase from "./adoption/erase.ts";


export const adoption = {
    post,
    getFirstOfList,
    getFullList,
    getList,
    erase
};