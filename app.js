const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const app = express()

//Import Routes
const expenseRoutes = require('./routes/expenses')

//Adds Body-parser
app.use(bodyParser.json())

//CORS
app.use(cors())

//Inserts post routes
app.use('/expenses', expenseRoutes)

//Routes 
app.get('/', (req, res) => {
    res.send("we are on home")
})

//Connect to database
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true } ,()=>{
    console.log("connected to db")
})

app.listen(3000)