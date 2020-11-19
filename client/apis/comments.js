import request from 'superagent'

export function postComment (comment) {
   return dispatch => {
     return request
      .post('/api/v1/comments/')
      // .then(res => {
      //    console.log(res.body)
      //    dispatch(showComments(res.body))
      // })
      // .catch(err => {
      //    console.log(err)
      // })
   }
 }

export function fetchComments (id) {
   return dispatch => {
     return request
      .get('/api/v1/comments/' + id)
      .then(res => {
         console.log(res.body)
         dispatch(showComments(res.body))
      })
      .catch(err => {
         console.log(err)
      })
   }
 }

 export const showComments = comments => {
   return {
     type: 'SHOW_COMMENTS',
     comments: comments
   }
 }
 