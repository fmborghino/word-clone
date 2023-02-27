import React from "react";
import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS, DEBUG } from "../../constants";

function Input({ guesses, setGuesses }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guesses.length < NUM_OF_GUESSES_ALLOWED) {
          DEBUG && console.log({ guess });
          setGuesses([...guesses, guess]);
        } else {
          DEBUG &&
            console.log(
              `NOT adding ${guess}, reached maximum ${NUM_OF_GUESSES_ALLOWED} words`
            );
        }
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter a 5 letter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          guess.length <= NUM_OF_LETTERS &&
            e.target.value.match(/^[A-Za-z]*$/) != null &&
            setGuess(e.target.value.toUpperCase());
        }}
        disabled={guesses.length >= NUM_OF_GUESSES_ALLOWED}
        required={true}
        minLength={5} // oddly unreliable
        maxLength={5}
        pattern={"[A-Za-z]{5}"}
        title={"5 letter word"}
        // placeholder={'— — — — —'}
      />
    </form>
  );
}

export default Input;
