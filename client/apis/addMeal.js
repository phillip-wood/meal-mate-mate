import request from 'superagent'


export function postMeal (newMeal) {
  return dispatch => {
    return request
     .post('/api/v1/meals/addMeal').send(newMeal)
     .then(() => {
        
     })
     .catch(err => {
        console.log(err)
     })
  }
}
