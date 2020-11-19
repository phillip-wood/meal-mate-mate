import request from 'superagent'

const rootUrl = '/api/v1'

export function getMeal () {
  return request.get(rootUrl + '/meals')
    .then(res => {
      return res.body
    })
}
