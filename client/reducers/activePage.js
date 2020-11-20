// import { CHANGE_PAGE } from '../actions'

const initialState = 'addMeal'
// const initialState = 'home'

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return action.page
    default:
      return state
  }
}

export default reducer
