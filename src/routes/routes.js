const noticeController = require('../controllers/noticeController')
const express = require('express')
const categoryController = require('../controllers/categoryController')
const router = express.Router()

router.use(express.json())

router.get('/', noticeController.renderViewNotices)

router.get('/newnotice', noticeController.renderCategoriesForm)

router.post('/newnotice', noticeController.insertNotice)

router.get('/mynoticies', (req,res) => {
    res.render('menu-notices')
})

module.exports = router