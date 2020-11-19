const connection = require('./connection')

function getComments (id, db = connection) {
  return db('comments').select().where('meal_id', id)
}

function addComment(comment, db = connection) {
   return db('comments').insert(comment)
}

module.exports = {
  getComments,
  addComment,
}