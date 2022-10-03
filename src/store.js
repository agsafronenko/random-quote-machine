import { legacy_createStore as createStore } from "redux";
import { current, FindNewQuote } from "./functions";

let initialState = {
  quote: current.quote,
  author: current.author,
};

export const NEW_QUOTE = "NEW_QUOTE";

const quoteReducer = (state = initialState, action) => {
  if (action.type === NEW_QUOTE) {
    FindNewQuote();
    return {
      quote: current.quote,
      author: current.author,
    };
  }
  return state;
};

const store = createStore(quoteReducer);
export default store;
