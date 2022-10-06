import quotes from "./quotes";
import { colors } from "./colors";

// selecting random quote to display
let currentQuote = "";
let previousIndex = "";
function FindNewQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  if (randomIndex === previousIndex) {
    FindNewQuote();
  } else {
    currentQuote = quotes[randomIndex];
    previousIndex = randomIndex;
  }
}
FindNewQuote();

// selecting random color for interface
let currentColor = "";
let previousColorIndex = "";
function color(colors) {
  let randomIndex = Math.floor(Math.random() * colors.length);
  if (randomIndex === previousColorIndex) {
    color(colors);
  } else {
    currentColor = colors[randomIndex];
    previousColorIndex = randomIndex;
  }
}
color(colors);

export { currentQuote, FindNewQuote, currentColor, color };
