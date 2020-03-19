const mongoose = require('mongoose')

const ExpenseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date, 
        default: Date.now
    },
    value: {
        type: Number,
        default: 0.0
    }

})

module.exports = mongoose.model('Expense', ExpenseSchema);