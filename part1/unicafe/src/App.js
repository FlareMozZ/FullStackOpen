import { useState } from 'react'


const Button = ({text, handleClick}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({good,neutral,bad,total}) => {

  if(good===0 && neutral===0 && bad===0){
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
    <h1>statistics</h1>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="total" value={total} />
    <StatisticLine text="average" value={(good-bad)/(good+neutral+bad)} />
    <StatisticLine text="positive" value={(good/(good+neutral+bad))*100 + '%'} />
    
    {/* <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p> 
    <p>total {good+neutral+bad}</p>
    <p>average {(good-bad)/(good+neutral+bad)}</p>
    <p>positive {(good/(good+neutral+bad))*100}%</p> */}

    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)


  const handlegood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleneutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handlebad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
    <h1>give feedback</h1>
    <Button text="good" handleClick={handlegood} />
    <Button text="neutral" handleClick={handleneutral} />
    <Button text="bad" handleClick={handlebad} />

    {/* <button onClick={() => setGood(good + 1)}>good</button>
    <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
    <button onClick={() => setBad(bad + 1)}>bad</button> */}

    <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App