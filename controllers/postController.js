const posts = require('../data/posts')

function index(req, res) {
    const tag = req.query.tags
    let filteredPosts = posts

    // console.log(tag)
    if (tag) {
        filteredPosts = posts.filter(post => post.tags.includes(tag))
    }
    res.json(filteredPosts)
}

function show(req, res) {
    const postId = parseInt(req.params.id)

    const post = posts.find(post => post.id === postId)

    if (!post) {
        res.status(404)

        return res.json({
            error: 'Not Found',
            message: 'Post not found'
        })
    }

    res.json(post)
}

function store(req, res) {

    const newId = posts[posts.length - 1].id + 1

    // console.log(req.body)

    const {title, content, image, tags} = req.body

    const newPost = {
        id: newId,
        title,
        content,
        image,
        tags
    }

    posts.push(newPost)

    res.status(201)

    res.json(newPost)
}

function update(req, res) {
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id)

    if (!post) {
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post not found"
        })
    }

    post.title = req.body.title
    post.content = req.body.content
    post.image = req.body.image
    post.tags = req.body.tags

    // console.log('All posts: ', posts)
    // console.log('Updated Post: ', post)

    res.json(post)
}

function partialUpdate(req, res) {
    const id = parseInt(req.params.id)

    const post = posts.find(post => post.id === id)

    if(!post){
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post not found"
        })
    }

    if(req.body.title){
    post.title = req.body.title
    }

    if(req.body.content){
        post.content = req.body.content
    }

    if(req.body.image){
        post.image = req.body.image
    }

    if(req.body.tags){
        post.tags = req.body.tags
    }

    // console.log(posts)
    res.json(post)
}

function destroy(req, res) {
    const postId = parseInt(req.params.id)
    const post = posts.find(post => post.id === postId)

    if(!post){
        res.status(404)

        return res.json({
            error: "Not Found",
            message: "Post not found"
        })
    }

    posts.splice(posts.indexOf(post), 1)
    // console.log(posts)
    res.sendStatus(204)
}

module.exports = {index, show, store, update, partialUpdate, destroy}