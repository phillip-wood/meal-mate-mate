import getMeal from '../apis/meals'
import request from 'superagent'

// import { getFruits } from '../apis/fruits'

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

export const collectMeals =(meals)=>{
  return{
    type: 'GET_ALL_MEALS',
    meals: meals
  }
}


export function  featchMeals() {
  return (dispatch) =>{
        dispatch(collectMeals())
        return request
        .get('/api/v1/meals')
        .then(res => {
          return res.body
        })

        //  .then(res =>{
        //    dispatch(collectMeals(res.body))
        //  })

  }
}