import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guess, setGuess] = React.useState('');
    return (
        <>
            <form className="guess-input-wrapper"
                  onSubmit={(e) => {
                      e.preventDefault();
                      setGuess('');
                      console.log({guess});
                  }}>
                <label htmlFor="guess-input">Enter guess:</label>
                <input
                    id="guess-input"
                    type="text"
                    value={guess}
                    onChange={(e) => {
                        guess.length <= 5 && setGuess(e.target.value.toUpperCase())
                    }}
                    required={true}
                    maxLength={5}
                    pattern={'[A-Z]{5}'}
                    // placeholder={'— — — — —'}
                />
            </form>
        </>);
}

export default Game;
