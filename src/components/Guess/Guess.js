import React from "react";
import { range } from "../../utils";
import { NUM_OF_LETTERS } from "../../constants";

function Guess({ word }) {
  return (
    <div className="guess">
      {range(0, NUM_OF_LETTERS).map((colIndex) => (
        <span key={colIndex} className="cell">
          {word !== undefined
            ? word[colIndex] !== undefined
              ? word[colIndex] // yup, there's a word, and it has a letter in this slot
              : ""
            : ""}
        </span>
      ))}
    </div>
  );
}

export default Guess;
