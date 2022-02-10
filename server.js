const express = require('express')
const routes = require('./src/routes/routes')
const app = express()
const moment=require('moment')

app.set('view engine', 'ejs')

moment.locale("pt-br")
app.locals.moment=moment

app.use(express.json())

app.use(routes)

app.listen(3000)