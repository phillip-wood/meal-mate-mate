import request from 'superagent'

const rootUrl = '/api/v1/'

// export function addMealToHome (meal) {
//   return request.post(rootUrl + '/addMeal').send(meal)
//   .then(res => {
//     return res.body
//   })
// }

//===============================

export function postMeal (newMeal) {
  return dispatch => {
    return request
     .post('/api/v1/addMeal').send(newMeal)
     .then(() => {
        
     })
     .catch(err => {
        console.log(err)
     })
  }
}
