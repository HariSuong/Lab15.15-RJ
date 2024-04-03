import { useDispatch, useSelector } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const show = useSelector(state => state.showCounter)
  const dispatch = useDispatch()
  const toggleCounterHandler = () => {
    dispatch({
      type: 'toggle'
    })
  }

  const handleInscrement = () => {
    dispatch({
      type: 'increment'
    })
  }
  const handleIncrease = () => {
    dispatch({
      type: 'increase',
      amount: 5
    })
  }
  const handleDescrement = () => {
    dispatch({
      type: 'decrement'
    })
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={handleInscrement}> Increment </button>
        <button onClick={handleIncrease}> Increment 5 </button>
        <button onClick={handleDescrement}> Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}

export default Counter
