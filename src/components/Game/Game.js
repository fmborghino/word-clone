import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guess, setGuess] = React.useState('');
    // a guess looks like { word, key }
    const [guesses, setGuesses] = React.useState([]);
    function word(word) {
        return {word, key: crypto.randomUUID()};
    }

    return (
        <>
            <div className="guess-results">
                {
                    guesses.map(({word, key}) => <p key={key} className='guess'>{word}</p>)
                }
            </div>
            <form className="guess-input-wrapper"
                  onSubmit={(e) => {
                      e.preventDefault();
                      console.log({guess});
                      setGuesses([...guesses, word(guess)]);
                      setGuess('');
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
