const connection = require('./connection')

function getMeals (db = connection) {
  return db('meals').select()
}

function addMeal (meal, db = connection) {
  return db ('meals').insert(meal)
}

module.exports = {
  getMeals,
  addMeal
}
