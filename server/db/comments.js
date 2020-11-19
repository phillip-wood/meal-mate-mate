const connection = require('./connection')

function getComments (id, db = connection) {
  return db('comments').select().where('meal_id', id)
}

module.exports = {
  getComments
}