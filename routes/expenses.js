

const express = require('express')
const router = express.Router()
const Expense = require('../models/Expense')

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
    const title = req.body.title
    const value = req.body.value
    console.log("Recieved values", title, value);
    const expense = new Expense({
       title: title,
       value: value,
    });
    expense.save()
    .then(savedExpense => {
        res.json(savedExpense)
    })
    .catch(err => {
        res.json({ message: err })
    })
/*
    try{
        const savedExpense = await expense.save()
        res.json(savedExpense)
    } catch(err) {
        res.json({message: err})
    } */
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
