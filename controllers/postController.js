const posts = require('../data/posts')

function index(req, res) {
    res.json(posts)
}

function show(req, res) {}

function store(req, res) {}

function update(req, res) {}

function partialUpdate(req, res) {}

function destroy(req, res) {}

module.exports = {index, show, store, update, partialUpdate, destroy}