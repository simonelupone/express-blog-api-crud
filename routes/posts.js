const express = require('express')
const router = express.Router()

const postController = require('../controllers/postController')

// index
router.get('/', postController.index)

// show
router.get('/:id', postController.show)

// store
router.post('/', (req, res) => {
    res.send('Create new post')
})

// update
router.put('/:id', (req, res) => {
    res.send(`Update post ${req.params.id}`)
})

// partial update
router.patch('/:id', (req, res) => {
    res.send(`Partial update of post ${req.params.id}`)
})

// destroy
router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id)
    const post = posts.find(post => post.id === postId)

    posts.splice(posts.indexOf(post), 1)

    res.sendStatus(204)
})

module.exports = router