const Notice = require('../models/Notice.js')
const Category = require('../models/Category.js')
var xss = require('xss')

module.exports = {
    async renderViewNotices(req, res) {
        const notices = await Notice.selectNotices()

        res.render('notices', { notices })
    },

    async renderCategoriesForm(req, res) {
        const categories = await Category.selectCategories()

        res.render('form-notice', { categories })
    },

    async insertNotice(req, res) {
        const title_notice = xss(req.body.titleNotice)
        const fk_id_category = xss(req.body.categorieNotice)
        const where_notice = xss(req.body.place)
        const dt_cad_notice = new Date()
        const fk_id_user = 1
        const dt_occur_notice = xss(req.body.dateoccur)
        const summary_notice = xss(req.body.notice)

        const msg = await Notice.save({ title_notice, where_notice, summary_notice, dt_cad_notice, dt_occur_notice, fk_id_category, fk_id_user })
        const categories = await Category.selectCategories()
        res.render('form-notice', { msg, categories })
    },

    async updateNotice(req, res) {
        const id = Number(req.params.id)
        const title_notice = xss(req.body.titleNotice)
        const fk_id_category = xss(req.body.categorieNotice)
        const where_notice = xss(req.body.place)
        const dt_cad_notice = new Date()
        const fk_id_user = 1
        const dt_occur_notice = xss(req.body.dateoccur)
        const summary_notice = xss(req.body.notice)

        const msg = await Notice.update({ title_notice, where_notice, summary_notice, dt_cad_notice, dt_occur_notice, fk_id_category, fk_id_user }, id)
        res.redirect('/')
    },

    async renderViewUpdateNotice(req, res) {
        const id = Number(req.params.id)

        const notice = await Notice.selectNoticeById(id)
        const categories = await Category.selectCategories()
        res.render('form-notice', {notice, categories})
    }
}
