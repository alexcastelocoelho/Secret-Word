import "./Game.css"

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
        <p className="points">
            <span>punctuation: 000</span>
        </p>
        <h1>guess the word</h1>
        <h3 className="tip">
        hint about the word <span>tip...</span>
        </h3>
        <p>you still have xxx tries</p>
        <div className="wordContainer">
            <span className="letter"></span>
            <span className="blankSquare" ></span>
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
            <span>a,</span>
            <span>b,</span>
        </div>
    </div>
  )
}

export default Game