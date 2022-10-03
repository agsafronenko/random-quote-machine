import { useSelector, useDispatch } from "react-redux";
import { NEW_QUOTE } from "./store";
import "./styles.css";

function App() {
  let current = useSelector((state) => state);
  let dispatch = useDispatch();
  let handleNewQuote = () => {
    dispatch({ type: NEW_QUOTE });
  };

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
