const initialState = []

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_MEAL":
      return [...state.action.meal]

      default:
        return state
    }    
}

export default reducer