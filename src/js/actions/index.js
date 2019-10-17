import { ADD_ARTICLE } from "../constants/action-types"
import index from "./js/index"

export function addArticle(payload) {
    return {type: "ADD_ARTICLE", payload} 
}