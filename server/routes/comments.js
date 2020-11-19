const express = require('express')

const db = require('../db/comments')

const router = express.Router()

router.get('/', (req, res) => {
  return db.getComments()
    .then(comments => {
      res.json(comments)
    }
    )
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router