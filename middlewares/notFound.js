function notFound (req, res, next) {
    res.status(404).json({
        error: 'Not Found',
        message: 'Page Not Found'
    })
}
module.exports = notFound