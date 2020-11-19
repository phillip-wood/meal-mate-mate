import { combineReducers } from 'redux'
import meals from './meals'
import activePage from './activePage'

export default combineReducers({
  activePage,
  meals
})
