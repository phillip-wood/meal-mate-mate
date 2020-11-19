const reducer = (state = 0, action) => {
  switch(action.type){
    case 'ACTIVE_MEAL':
      return action.mealId
    
    default:
      return state
  }
}

export default reducer