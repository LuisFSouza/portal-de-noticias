const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.json())

app.get('/', (req,res) => {
    res.render('notices')
})

app.get('/newnotice', (req,res) => {
    res.render('form-notice')
})

app.listen(3000)