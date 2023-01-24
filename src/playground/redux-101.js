import { createStore } from 'redux'

// ACtion Generators - functions that return action objects

console.log

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy,
})

const decrementCount = ({ decrementBy = -1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy,
})

const setCount = ({ count }) => ({
  type: 'SET',
  count,
})

const resetCount = () => ({
  type: 'RESET',
})

//Reducers
//1. Reducers are pure functions
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy,
      }
    case 'DECREMENT':
      const decrementBy =
        typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy,
      }
    case 'SET':
      return {
        count: action.count,
      }
    case 'RESET':
      return {
        count: 0,
      }
    default:
      return state
  }
}

const store = createStore(countReducer)

store.subscribe(() => {
  console.log(store.getState())
})

//Actions - are an object that gets sent to the store

//Increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5,
// })
store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

//Reset the count
store.dispatch(resetCount())

//Decrement the count
store.dispatch(decrementCount())

store.dispatch(decrementCount({ decrementBy: 10 }))

store.dispatch(setCount({ count: 101 }))
