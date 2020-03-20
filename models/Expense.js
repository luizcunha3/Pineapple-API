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
    },
    installments: {
        numberOfInstallments: {
            type: Number,
            default: 1
        },
        current: {
            type: Number,
            defautl: 1
        }
    },
    category: {
        type: [String],
        required: false
    }

})

module.exports = mongoose.model('Expense', ExpenseSchema);
/**
"installments": {
                "numberOfInstallments": 1,
                "current":1
            },
 */