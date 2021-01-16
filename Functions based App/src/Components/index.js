import React, { useState, useEffect } from "react";
import {
  QuoteBody,
  QuoteBtnWrapper,
  QuoteBg,
  Button,
  QuoteHr,
  QuoteContainer,
  Quote,
  Author,
  CheckBoxWrapper,
  CheckBox,
  CheckBoxLabel
} from "./elements";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main() {
  let defaultQuote =
    "If we could see the miracle of a single flower clearly, our whole life would change.";

  // declare useState Hooks
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(defaultQuote);
  const [randomAuthor, setRandomAuthor] = useState("Buddha");
  const [hasAuthor, setHasAuthor] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // fetch API data using useEffect
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      });
  };
  useEffect(getQuotes);

  // function to generate random quotes and store it into the "quotes"
  function genQuote(e) {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randNum].text);
    setRandomAuthor(quotes[randNum].author);
    if (quotes[randNum].author === null) {
      setHasAuthor(false);
    } else {
      setHasAuthor(true);
    }
  }

  // function to toggle dark mode
  function darkModeConfig() {
    setDarkMode(!darkMode);
  }

  return (
    <QuoteBg displayDarkMode={darkMode}>
      <QuoteBody id="quote-box" displayDarkMode={darkMode}>
        <QuoteContainer displayDarkMode={darkMode}>
          <Quote id="text" displayDarkMode={darkMode}>
            {randomQuote}
          </Quote>
          <Author
            id="author"
            displayAuthor={hasAuthor}
            displayDarkMode={darkMode}
          >
            - {randomAuthor}
          </Author>
        </QuoteContainer>
        <QuoteHr></QuoteHr>
        <QuoteBtnWrapper displayDarkMode={darkMode}>
          <a
            id="tweet-quote"
            target="_blank "
            href={`https://twitter.com/intent/tweet?text=${randomQuote}-${randomAuthor}`}
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <Button id="new-quote" onClick={genQuote}>
            New Quote
          </Button>
        </QuoteBtnWrapper>
      </QuoteBody>
      {/* <ToggleSwitch /> */}
      <CheckBoxWrapper>
        <CheckBox id="checkbox" type="checkbox" onChange={darkModeConfig} />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </QuoteBg>
  );
}
