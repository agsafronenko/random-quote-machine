import { combineReducers } from "redux";
import { currentQuote, FindNewQuote, currentColor, color } from "./functions";
import { colors } from "./colors";
import $ from "jquery";

export const NEW_QUOTE = "NEW_QUOTE";
export const NEW_COLOR = "NEW_COLOR";

// reducer for quotes
let initialState = {
  quote: currentQuote.quote,
  author: currentQuote.author,
};
const quoteReducer = (state = initialState, action) => {
  if (action.type === NEW_QUOTE) {
    FindNewQuote();
    return {
      quote: currentQuote.quote,
      author: currentQuote.author,
    };
  }
  return state;
};

// reducer for interface color
const initialColor = currentColor;
const colorReducer = (state = initialColor, action) => {
  if (action.type === NEW_COLOR) {
    color(colors);
  }
  $("body").css("background-color", currentColor);
  return currentColor;
};

// combining reducers
export const rootReducer = combineReducers({
  quoteR: quoteReducer,
  colorR: colorReducer,
});
