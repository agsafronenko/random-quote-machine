import { useSelector, useDispatch } from "react-redux";
import { NEW_QUOTE, NEW_COLOR } from "./reducers";
import "./styles.css";

function App() {
  let current = useSelector((state) => state);
  let dispatch = useDispatch();
  let handleNewQuote = () => {
    dispatch({ type: NEW_QUOTE });
    dispatch({ type: NEW_COLOR });
  };
  return (
    <div id="quote-box">
      <div id="text">{current.quoteR.quote}</div>
      <div id="author">{current.quoteR.author}</div>
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
