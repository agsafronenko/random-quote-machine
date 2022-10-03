import { useSelector, useDispatch } from "react-redux";
import { NEW_QUOTE } from "./store";

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
      <button id="tweet-quote">twitter</button>
      <button>tubmlr</button>
      <button id="new-quote" onClick={handleNewQuote}>
        New quote
      </button>
    </div>
  );
}

export default App;
