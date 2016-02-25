import { combineReducers } from 'redux'
import todos from './todos'
import cars from './cars'

const rootReducer = combineReducers({
  cars,
  todos
})

export default rootReducer
