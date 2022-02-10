const Notice = require('../models/Notice.js')
const Category = require('../models/Category.js')

module.exports = {
    async selectNotices(req, res) {
        const notices = await Notice.selectNotices()
        
        console.log(notices)
        res.render('notices', { notices })
    },

    async selectCategoriesForm(req, res) {
        const categories = await Category.selectCategories()
        
        console.log(categories)
        res.render('form-notice', { categories })
    }
}