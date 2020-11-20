import getMeal from '../apis/meals'
import request from 'superagent'

export function updateComment(updatedState) {
  return {
    type: 'UPDATE_COMMENT',
    updatedState
  }
}

export const showComments = comments => {
   return {
     type: 'SHOW_COMMENTS',
     comments: comments
   }
 }

export const collectMeals =(meals)=>{
  return{
    type: 'GET_ALL_MEALS',
    meals: meals
  }
}


export function  featchMeals() {
  return dispatch =>{
        return request
        .get('/api/v1/meals')
        .then(res => {
          return dispatch(collectMeals(res.body))
        })
        .catch(err => {
          console.log(err)
       })
  }
}

export function activeMeal (mealId) {
  return{
    type: 'ACTIVE_MEAL',
    mealId: mealId,
  }
}

export function activePage (page){
  return {
    type: 'CHANGE_PAGE',
    page: page
  }
}