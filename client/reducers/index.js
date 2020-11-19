import { combineReducers } from 'redux'

import activePage from './activePage'
import mealComments from './mealComments'

export default combineReducers({
  activePage,
  mealComments,
})
