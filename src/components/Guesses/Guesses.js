import React from "react";
import { NUM_OF_GUESSES_ALLOWED, DEBUG } from "../../constants";
import { range } from "../../utils";
import Guess from "../Guess";

function Guesses({ guesses, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
          <Guess key={rowIndex} word={guesses[rowIndex]} answer={answer} />
        ))}
      </div>
      {DEBUG && (
        <div className="guess-results">
          {guesses.map((word, index) => (
            <p key={index} className="guess">
              {index} {word}
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Guesses;
