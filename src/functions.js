import quotes from "./quotes";
import { colors } from "./colors";
import $ from "jquery";

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

// selecting random color for the interface / applying fade in/out effects
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
  $("body").css("background-color", currentColor);
  $("#text").css("color", currentColor);
  $("#author").css("color", currentColor);
  $("body").addClass("animated fadeIn");
  $("quote-box").addClass("animated fadeOut");
}

export { currentQuote, FindNewQuote, currentColor, color };
