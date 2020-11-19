

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_COMMENTS':
      return action.comments
    default:
      return state
  }
}

export default reducer