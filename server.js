let express = require('express');
let app = express()
let dotenv = require('dotenv')

// CONFIG DOTENV 
dotenv.config()

// ENGINE TEMPLATE 
app.set("view engine", "ejs");

// MIDDLEWARE
app.use(express.static('public'))


// ROUTES 
app.use('/', (req,res, next)=> {
    res.render('index')
})

let PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Listenning on port 3000")
});