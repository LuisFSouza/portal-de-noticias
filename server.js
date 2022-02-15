const express = require('express')
const routes = require('./src/routes/routes')
const app = express()
const moment = require('moment')
const bodyParser=require('body-parser')

app.set('view engine', 'ejs')

moment.locale("pt-br")
app.locals.moment=moment

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(express.json())

app.use(routes)

app.listen(3000)