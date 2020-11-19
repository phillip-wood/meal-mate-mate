

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_COMMENTS':
      return action.comments
   case 'UPDATE_COMMENT':
      return action.updatedState
    default:
      return state
  }
}

export default reducer