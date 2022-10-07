import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NEW_QUOTE } from "./reducers";
import { color, currentColor } from "./functions";
import { colors } from "./colors";
import "./styles.css";

function App() {
  let current = useSelector((state) => state);
  let dispatch = useDispatch();
  let handleNewQuote = () => {
    dispatch({ type: NEW_QUOTE });
    color(colors);
  };

  // appling color/effects to the interface on the first render
  useEffect(() => {
    color(colors);
  }, []);

  return (
    <div id="quote-box">
      <div id="text">{current.quote}</div>
      <div id="author">{current.author}</div>
      <div className="buttonsStyles">
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          twitter
        </a>
        <button id="new-quote" onClick={handleNewQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
