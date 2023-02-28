import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guesses from "../Guesses";
import Input from "../Input";
import EndGame from "../EndGame";
import { DEBUG } from "../../constants";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const answer = sample(WORDS);
    DEBUG && console.info({ answer });
    return answer;
  });
  const [guesses, setGuesses] = React.useState([]);

  function resetGame() {
    const answer = sample(WORDS);
    console.info({ answer });
    setAnswer(answer);
    setGuesses([]);
  }

  return (
    <>
      <Guesses guesses={guesses} answer={answer} />
      <Input guesses={guesses} setGuesses={setGuesses} />
      <EndGame guesses={guesses} answer={answer} resetGame={resetGame} />
    </>
  );
}

export default Game;
