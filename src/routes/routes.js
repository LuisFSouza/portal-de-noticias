const noticeController = require('../controllers/noticeController')
const userController = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.use(express.json())

router.get('/', noticeController.renderViewNotices)

router.get('/notices/newnotice', noticeController.renderCategoriesForm)

router.post('/notices/newnotice', noticeController.insertNotice)

router.get('/notices/editnotice/:id', noticeController.renderViewUpdateNotice)

router.post('/notices/editnotice/:id', noticeController.updateNotice)

router.get('/notices/deletenotice/:id', noticeController.deleteNotice)

router.get('/mynoticies', noticeController.renderViewMyNotices)

router.get('/users/newuser', userController.renderViewFormUsers)

router.post('/users/newuser', userController.insertUser)

module.exports = router