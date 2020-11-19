import request from 'superagent'

const rootUrl = '/api/v1/'

export function addMealToHome (meal) {
  return request.post(rootUrl + '/addMeal').send(meal)
  .then(res => {
    return res.body
  })
}
