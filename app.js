const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const postsRouter = require('./routes/posts')
app.use('/posts', postsRouter)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})