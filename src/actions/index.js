import { ADD_ARTICLE } from "../constants/action-types";
import { FIND_IMAGE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function findImage(payload) {
    return { type: FIND_IMAGE, payload };
}