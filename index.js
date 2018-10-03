const express = require('express')
const app = express()
const port = 3000


// Folder for views files
app.set('views', './views')
//Templating engine set to pug
app.set('view engine', 'pug')


app.get('/', (req, res) => res.render('home'), {title: "Blue|1647 FarmBot"})


app.listen(port, () => console.log('Example app listening on port ${port}!'))