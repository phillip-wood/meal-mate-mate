const connection = require('./connection')

function getMeals (db = connection) {
  return db('meals').select()
}

module.exports = {
  getMeals
}
