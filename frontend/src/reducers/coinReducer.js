import { SEARCH_COIN } from "../actions/types";

const initialState = {
  keyword: "",
  recentKeywords: [],
};

export const coinSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    // adds search term to state and saves in recent keyword array
    case SEARCH_COIN:
      return {
        ...state,
        keyword: action.payload,
        recentKeywords: [...state.recentKeywords, action.payload],
      };
    default:
      return state;
  }
};
