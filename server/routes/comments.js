const express = require('express')

const db = require('../db/comments')

const router = express.Router()

router.get('/:id', (req, res) => {
   const id = req.params.id
   return db.getComments(id)
      .then(comments => {
      res.json(comments)
   })
   .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
   })
})

router.post('/', (req, res) => {
   console.log('route hit')
   return db.addComment(req.body)
      .then(() => res.json({}))
      .catch(err => {
         console.log(err)
         res.status(500).json({ message: 'Somthing went wrong' })
       })
})

module.exports = router