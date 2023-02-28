/*
 * Fixes for duplicate letters.
 * Problem: A guess="AAXXX" and an answer "ABCDE" will mark both guess "A"s as matching (correct, and misplaced).
 * There are many variations of this, but all around "mutiple-scoring" of letters.
 *
 * Does Wordle allow this? Seems like the answer is "no", it won't "re-match" a letter in the answer that was already
 * matched in the guess, if the guess duplicates that letter.
 *
 * To avoid dup guess letters from each "matching" (correct or misplaced) we need to logically remove the
 * matched solution letters once they are accounted for. Lots of ways to do this... here's one.
 * There must be something more succinct!
 */
export function checkGuess(guess, answer) {
  if (!guess) {
    return null;
  }

  const guessChars = guess.toUpperCase().split("");
  const answerChars = answer.split("");

  const correctOnlyScores = guessChars.map((guessChar, index) => {
    const answerChar = answerChars[index];
    const score = { letter: answerChar, status: "incorrect" };
    if (guessChar === answerChar) {
      score.status = "correct";
      // remove the answerChar from future possible matching
      answerChars[index] = "=";
    }
    return score;
  });

  const correctAndMisplacedScores = guessChars.map((guessChar, index) => {
    const score = correctOnlyScores[index];
    if (score.status === "correct") {
      return score;
    }
    const misplaced = answerChars.indexOf(guessChar);
    if (misplaced >= 0) {
      score.status = "misplaced";
      // remove the answerChar from future possible matching
      answerChars[misplaced] = "~";
    }
    return score;
  });

  return correctAndMisplacedScores;
}
