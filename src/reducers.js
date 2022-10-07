import { currentQuote, FindNewQuote } from "./functions";

export const NEW_QUOTE = "NEW_QUOTE";

// reducer for quotes
let initialState = {
  quote: currentQuote.quote,
  author: currentQuote.author,
};
export const quoteReducer = (state = initialState, action) => {
  if (action.type === NEW_QUOTE) {
    FindNewQuote();
    return {
      quote: currentQuote.quote,
      author: currentQuote.author,
    };
  }
  return state;
};
