const noticeController = require('../controllers/noticeController')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', noticeController.renderViewNotices)

router.get('/notices/newnotice', noticeController.renderCategoriesForm)

router.post('/notices/newnotice', noticeController.insertNotice)

router.get('/notices/editnotice/:id', noticeController.renderViewUpdateNotice)

router.post('/notices/editnotice/:id', noticeController.updateNotice)

router.get('/mynoticies', (req,res) => {
    res.render('menu-notices')
})

module.exports = router