const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0'

const app = express()

//Import Routes
const expenseRoutes = require('./routes/expenses')
const utilRoutes = require('./routes/util')

//Adds Body-parser
app.use(bodyParser.json())

//CORS
app.use(cors())

//Inserts post routes
app.use('/expenses', expenseRoutes)
app.use('/util', utilRoutes)

//Routes 
app.get('/', (req, res) => {
    res.send("we are on home")
})

//Connect to database
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true, useUnifiedTopology: true } ,()=>{
    console.log("connected to db")
})

app.listen(PORT);