import request from 'superagent'

const rootUrl = '/api/v1'

export function getMeal () {
  console.log('hell')
  return request
    .get('/api/v1/meals')
    .then(res => {
      return res.body
    })
    
}
