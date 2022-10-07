import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NEW_QUOTE } from "./reducers";
import { color } from "./functions";
import { colors } from "./colors";
import "./styles.css";
import $ from "jquery";

function App() {
  let current = useSelector((state) => state);
  let dispatch = useDispatch();
  let handleNewQuote = () => {
    $("html").addClass("animated fadeOut");
    setTimeout(() => {
      color(colors);
      $("html").removeClass("animated fadeOut");
      dispatch({ type: NEW_QUOTE });
      $("html").addClass("animated fadeIn");
    }, 700);
  };

  // appling color/fadeIn to the interface on the first render
  useEffect(() => {
    color(colors);

    $("html").addClass("animated fadeIn");
  }, []);

  return (
    <div id="quote-box">
      <div id="text">
        <i className="fas fa-quote-left"></i>
        {" " + current.quote}
      </div>
      <div id="author">{current.author}</div>
      <div>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <button id="new-quote" onClick={handleNewQuote}>
          New quote
        </button>
      </div>
    </div>
  );
}

export default App;
