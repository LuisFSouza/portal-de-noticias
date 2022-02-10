const noticeController = require('../controllers/noticeController')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', noticeController.selectNotices)

router.get('/newnotice', (req,res) => {
    res.render('form-notice')
})


router.get('/mynoticies', (req,res) => {
    res.render('menu-notices')
})

module.exports = router