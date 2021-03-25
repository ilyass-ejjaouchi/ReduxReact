import { ADD_ARTICLE } from "../constants/action-types";
import { FIND_IMAGE } from "../constants/action-types";

const initialState = {
  articles: [],
  images:[]
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if (action.type === FIND_IMAGE) {
    return Object.assign({}, state, {
      articles: state.images.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;