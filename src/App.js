import "./App.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTumblr } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [quotesData, setQuotesData] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(Math.floor(Math.random() * 100));
  const color = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];
  React.useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuotesData(data.quotes);
      });
  }, []);

  function handleClick() {
    setQuoteIndex(Math.floor(Math.random() * quotesData.length));
  }
  const backgroundColor = color[Math.floor(Math.random() * color.length + 1)];
  return (
    <div
      className="App"
      style={{ backgroundColor: backgroundColor, color: backgroundColor }}
    >
      <div className="card">
        {quotesData.length > 5 ? (
          <div className="quoteDiv">
            <p className="quote">
              {" "}
              <FontAwesomeIcon icon={faQuoteLeft} />
              {quotesData[quoteIndex].quote}
            </p>
            <p className="author">-{quotesData[quoteIndex].author}</p>
          </div>
        ) : (
          <div>
            <p className="quote">...loading</p>
            <p className="author">...loading</p>
          </div>
        )}
        <div className="footer">
          <div className="icons">
            <div
              className="twitterIcon ICON"
              style={{ backgroundColor: backgroundColor }}
            >
              <a href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Either%20you%20run%20the%20day%2C%20or%20the%20day%20runs%20you.%22%20Jim%20Rohn">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faTwitter}
                />
              </a>
            </div>
            <div
              className="tmlrIcon ICON"
              style={{ backgroundColor: backgroundColor }}
            >
              <a href="https://www.tumblr.com/explore/trending?source=homepage_explore">
                <FontAwesomeIcon
                  style={{ width: "25px", height: "25px" }}
                  icon={faTumblr}
                />
              </a>
            </div>
          </div>
          <button
            className="quoteButton"
            onClick={() => handleClick()}
            style={{ backgroundColor: backgroundColor }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
