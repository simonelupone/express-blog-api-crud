const express = require('express')
const router = express.Router()

const posts = require('../data/posts')

// index
router.get('/', (req, res) => {
    res.json(posts)
})

// show
router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id)

    const post = posts.find(post => post.id === postId)

    if(!post){
        res.status(404)

        res.json({
            error: 'Not Found',
            message: 'Post not found'
        })
    }

    res.json(post)
})

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

module.exports = router