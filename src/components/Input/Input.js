import React from "react";
import { NUM_OF_LETTERS } from "../../constants";

function newGuess(word) {
  return { word, key: crypto.randomUUID() };
}
function Input({guesses, setGuesses}) {
  const [guess, setGuess] = React.useState("");

  return (
    <form className="guess-input-wrapper"
          onSubmit={(e) => {
            e.preventDefault();
            console.log({ guess });
            setGuesses([...guesses, newGuess(guess)]);
            setGuess('');
          }}
    >
      <label htmlFor="guess-input">Enter a 5 letter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          guess.length <= NUM_OF_LETTERS &&
          e.target.value.match(/^[A-Za-z]+$/) != null &&
          setGuess(e.target.value.toUpperCase());
        }}
        required={true}
        minLength={5} // oddly unreliable
        maxLength={5}
        pattern={"[A-Za-z]{5}"}
        title={'5 letter word'}
        // placeholder={'— — — — —'}
      />
    </form>
  );
}

export default Input;
