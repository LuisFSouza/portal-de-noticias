var xss = require('xss')
const User = require('../models/User.js')

module.exports = {
    async renderViewFormUsers(req, res){
        res.render('form-user')
    },

    async insertUser(req, res){
        const name_user = xss(req.body.nameUser)
        const email_user = xss(req.body.emailUser)
        const login_user = xss(req.body.loginUser)
        const password_user = xss(req.body.passwordUser)

        const msg = await User.save({ name_user, email_user, login_user, password_user})
        res.render('form-user', { msg })
    }
}