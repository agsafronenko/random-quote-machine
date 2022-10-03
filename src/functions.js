import quotes from "./quotes";

let current = "";
let previousIndex = "";
function FindNewQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  if (randomIndex === previousIndex) {
    FindNewQuote();
  } else {
    current = quotes[randomIndex];
    previousIndex = randomIndex;
  }
}
FindNewQuote();

export { current, FindNewQuote };
