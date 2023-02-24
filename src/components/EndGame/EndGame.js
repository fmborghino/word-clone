import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EndGame({ guesses, answer, resetGame }) {
  let state = "playing";
  const lastGuess = guesses.length > 0 ? guesses[guesses.length - 1] : null;
  if (lastGuess === answer) {
    state = "won";
  } else if (guesses.length === NUM_OF_GUESSES_ALLOWED) {
    // didn't match the 'win', so...
    state = "lost";
  }
  return (
    <>
      {state === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>
              {guesses.length} guess{guesses.length > 1 ? "es" : ""}
            </strong>
            .
          </p>
          <br />
          <button className="button-54" onClick={() => resetGame()}>
            Play again
          </button>
        </div>
      )}
      {state === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <br />
          <button className="button-54" onClick={() => resetGame()}>
            Play again
          </button>
        </div>
      )}
    </>
  );
}

export default EndGame;
