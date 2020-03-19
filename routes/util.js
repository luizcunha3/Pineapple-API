const express = require('express')
const router = express.Router()


//Update Post
router.get('/healthcheck', async(req, res) => {
    res.status(200).json({
        message: "Everything OK"
    })
})

module.exports = router
