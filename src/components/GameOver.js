import "./GameOver.css"

const GameOver = ({retry, score}) => {
  return (
    <div>
        <h1>End Game!</h1>
        <h2>your score was: <span>{score}</span></h2>
        <button onClick={retry}>reset game</button>
    </div>
  )
}

export default GameOver