const posts = require('../data/posts')

function index(req, res) {
    res.json(posts)
}

function show(req, res) {
    const postId = parseInt(req.params.id)

    const post = posts.find(post => post.id === postId)

    if (!post) {
        res.status(404)

        res.json({
            error: 'Not Found',
            message: 'Post not found'
        })
    }

    res.json(post)
}

function store(req, res) {
    res.send('Create new post')
}

function update(req, res) {
    res.send(`Update post ${req.params.id}`)
}

function partialUpdate(req, res) {}

function destroy(req, res) {}

module.exports = {index, show, store, update, partialUpdate, destroy}