const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_MEALS':
        return action.meals

    default:
      return state
  }
}

export default reducer





