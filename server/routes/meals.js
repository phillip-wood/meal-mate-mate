const express = require('express')

const db = require('../db/meals')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getMeals()
    .then(meals => {
      res.json(meals)
    }
    )
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.post('/addMeal', (req, res) => {
  console.log(db)
  const meal = req.body
  return db.addMeal(meal)
  .then(newMeal => {
    res.json(newMeal)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'You broke something' })
  })
}) 


module.exports = router
