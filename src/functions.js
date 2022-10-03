import quotes from "./Quotes";

let current = "";
let previous = "";
function FindNewQuote() {
  let randomIndex = Math.floor(Math.random() * 3);
  if (randomIndex === previous) {
    FindNewQuote();
  } else {
    current = quotes[randomIndex];
    previous = randomIndex;
  }
}
FindNewQuote();

export { current, previous, FindNewQuote };
