export const ADD_MEAL = "ADD_MEAL"


export function addMeal (meal) {
  return {
    type: ADD_MEAL,
    meal: meal,
  }
}



// export const SET_FRUITS = 'SET_FRUITS'

// export function setFruits (fruits) {
//   return {
//     type: SET_FRUITS,
//     fruits
//   }
// }

// export function fetchFruits () {
//   return dispatch => {
//     return getFruits()
//       .then(fruits => {
//         dispatch(setFruits(fruits))
//         return null
//       })
//   }
// }
