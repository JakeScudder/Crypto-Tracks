import { SEARCH_COIN } from "./types.js";

//This action is called from the NavBar
export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({
    type: SEARCH_COIN,
    payload: keyword,
  });
};
