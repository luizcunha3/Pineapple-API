

const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')
const ExpensesController = require('../controllers/ExpensesController')
//Gets all the posts
router.get('/', async (req, res) => {
    try{
        const expenses = await Expense.find()
        res.json(expenses)
    } catch(err) {
        res.json({message: err})
    }
})

//Submit an expense
router.post('/', (req, res) => {
    const expenses = req.body
    ExpensesController.createExpense(req.body)
    .then(expense => {
        res.json(expense)
    })
    .catch(err => {
        res.json({ message: expense })
    })
})

//Specific post
router.get('/:expenseid', async (req, res) => {
    const expenseId = req.params.expenseid
    try {
        const expense = await Expense.findById(expenseId)    
        res.json(expense)
    } catch (err) {
        res.json({message: err})
    }
    

})

//Delete Post
router.delete('/:expenseid', async (req, res) => {
    const expenseId = req.params.expenseid
    try {
        const removedExpense = await Expense.deleteOne({_id: expenseId})    
        res.json(removedExpense)
    } catch (err) {
        res.json({message: err})        
    }
    

})

//Update Post
router.patch('/:expenseid', async(req, res) => {
    const expenseId = req.params.expenseid
    const newTitle = req.body.title
    try {
        const updatedExpense = await Expense.updateOne({_id: expenseId}, {$set: {title: newTitle}})
        res.json(updatedExpense)   
    } catch (err) {
       res.json({message: error}) 
    }
})

module.exports = router
