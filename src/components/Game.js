import React, {useEffect, useState} from 'react'

function Game() {
  const [score, setScore] = useState(0)
  const [record, setRecord] = useState(0)

  useEffect(() => {
    if (score >= record) {
      setRecord(score)
    }
  }, [record, score])

  const incrementScore = () => {
    setScore(score + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  return (
    <div>
      <div>Score: {score}</div>
      <div>Record: {record}</div>
      <button onClick={incrementScore}>Increment</button>
      <button onClick={resetScore}>Reset</button>
    </div>
  )
}

export default Game