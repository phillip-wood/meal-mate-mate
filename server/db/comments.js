const connection = require('./connection')

function getComments (db = connection) {
  return db('comments').select()
}

module.exports = {
  getComments
}