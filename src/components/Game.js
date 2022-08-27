import "./Game.css"

const Game = (
    {verifyLetter, 
    pickedWord,
    pickedCategory,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score,
 }) => {
  return (
    <div className="game">
        <p className="points">
            <span>punctuation: {score}</span>
        </p>
        <h1>guess the word</h1>
        <h3 className="tip">
        hint about the word <span>{pickedCategory}</span>
        </h3>
        <p>you still have {guesses} tries</p>
        <div className="wordContainer">
            {letters.map((letter, i) => (
                guessedLetters.includes(letter) ? (
                    <span key={i} className="letter">{letter}</span>
                ) : (
                    <span key={i} className="blankSquare"> </span>
                )
            ))}
        </div>
        <div className="letterContainer">
            <p>try to guess a letter of the word:</p>
            <form >
                <input type="text" name="letter" maxLength="1" required />
                <button>play!</button>
            </form>
        </div>
        <div className="wrongLettersContainer">
            <p>letters already used:</p>
            {wrongLetters.map((letter, i) => (
                <span key={i}>{letter}, </span>
            ))}
        </div>
    </div>
  )
}

export default Game