import request from 'superagent'

export function postComment (id, comment) {

   let newComment = {
      comment: comment,
      meal_id: id
   }
   return dispatch => {
     return request
      .post('/api/v1/comments/').send(newComment)
      .then(() => {

      })
      .catch(err => {
         console.log(err)
      })
   }
 }

export function fetchComments (id) {
   return dispatch => {
     return request
      .get('/api/v1/comments/' + id)
      .then(res => {
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
 