import post from "./adoption/post.ts";
import { getFirstOfList, getFullList, getList, getOne } from "./adoption/get.ts";
import erase from "./adoption/erase.ts";


export const adoption = {
    post,
    getFirstOfList,
    getFullList,
    getList,
    getOne,
    erase
};