import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS } from "../../constants";
import { checkGuess } from "../../game-helpers";

function renderLetter(word, colIndex) {
  return word !== undefined
    ? word[colIndex] !== undefined
      ? word[colIndex] // yup, there's a word, and it has a letter in this slot
      : ""
    : "";
}

function renderClass(checks, colIndex) {
  const status = checks && checks[colIndex] ? checks[colIndex].status : "";
  return `cell ${status}`.trim();
}

function Guess({ word, answer }) {
  const checks = checkGuess(word, answer);
  return (
    <div className="guess">
      {range(0, NUM_OF_LETTERS).map((colIndex) => (
        <span key={colIndex} className={renderClass(checks, colIndex)}>
          {renderLetter(word, colIndex)}
        </span>
      ))}
    </div>
  );
}

export default Guess;
