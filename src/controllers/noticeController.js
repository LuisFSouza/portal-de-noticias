const Notice = require('../models/Notice.js')

module.exports = {
    async selectNotices(req, res) {
        const notices = await Notice.selectNotices()
        
        console.log(notices)
        res.render('notices', { notices })
    }
}