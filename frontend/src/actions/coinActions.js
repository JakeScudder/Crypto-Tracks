import { SEARCH_COIN } from "./types.js";

export const searchCoin = (keyword) => async (dispatch) => {
  dispatch({
    type: SEARCH_COIN,
    payload: keyword,
  });
};
