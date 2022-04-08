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
    },

    async updateUser(req, res){
        const id = Number(req.params.id)
        const name_user = xss(req.body.nameUser)
        const email_user = xss(req.body.emailUser)
        const login_user = xss(req.body.loginUser)
        const password_user = xss(req.body.passwordUser)

        const msg = await User.update({ name_user, email_user, login_user, password_user}, id)
        res.redirect('/users')
    },

    async renderViewUsers(req, res){
        const users = await User.selectUsers()
        res.render('menu-users', {users})
    },

    async renderViewUpdateUser(req, res){
        const id = Number(req.params.id)
        const user = await User.selectUserById(id)
        res.render('form-user', {user})
    },

    async deleteUser(req, res){
        const id = Number(req.params.id)
        await User.deleteUser(id)
        res.redirect('/users')
    },
}