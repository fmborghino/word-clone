import React from "react";

function Guesses({guesses}) {
  return <div className="guess-results">
    {
      guesses.map(({word, key}) => <p key={key} className='guess'>{word}</p>)
    }
  </div>;
}

export default Guesses;
