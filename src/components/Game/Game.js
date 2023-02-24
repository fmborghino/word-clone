import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guesses from "../Guesses";
import Input from "../Input";
import EndGame from "../EndGame";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  // a guess looks like { word, key }
  const [guesses, setGuesses] = React.useState([]);

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input guesses={guesses} setGuesses={setGuesses} />
      <EndGame guesses={guesses} answer={answer} />
    </>
  );
}

export default Game;
