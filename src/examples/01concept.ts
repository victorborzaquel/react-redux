import { configureStore } from '@reduxjs/toolkit'

// Actions
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}

// Action Creators
const addTodo = (text: string) => ({
  type: 'todos/todoAdded',
  payload: text
})

// Reducers
const initialState = { value: 0 }

function counterReducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case 'counter/increment':
      return { value: state.value + 1 }
    default:
      return state
  }
}

// Store
const store = configureStore({ reducer: counterReducer })

// Dispatch
store.dispatch({ type: 'counter/increment' })

const increment = () => ({ type: 'counter/increment' })

store.dispatch(increment())

// Selectors
const selectCounterValue = (state: { value: number }) => state.value

const currentValue = selectCounterValue(store.getState())