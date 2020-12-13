import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🏺": "Amphora",
  "💈": "Barber Pole",
  "🧭": "Compass",
  "🎊": "Confetti Ball",
  "🎉": "Party Popper",
  "🪀": "yoyo",
  "📟": "Pager",
  "🧮": "Abacus",
  "⚗️": "Alembic",
  "🪕": "Banjo"
};

var emojis = Object.keys(emojiDictionary);
console.log(emojis);

export default function App() {
  let [meaning, setMeaning] = useState(" ");

  function onChangeHandler(e) {
    let meaning = emojiDictionary[e.target.value];
    setMeaning(meaning);
    // console.log(meaning);
  }

  function onClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoticon Actual Meaning</h1>
      <input onChange={onChangeHandler} />

      <h2>{meaning}</h2>

      <h3>Click on Objects below to know the meaning</h3>
      {emojis.map((emoji) => {
        return (
          <span
            onClick={() => onClickHandler(emoji)}
            style={{ padding: "0.5rem", cursor: "pointer", fontSize: "2rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
