const Expense = require('../models/Expense')

exports.createExpense = order => {
    const promises = []
    if(order.expenses != null) {
        order.expenses.forEach(expense => {
            promises.push(saveExpense(expense))
        });
        return Promise.all(promises)
    } else {
        return saveExpense(order)
    }
}

const saveExpense = expenseData => {
    const title = expenseData.title
    const value = expenseData.value
    const categories = expenseData.category
    const installments = expenseData.installments

    if(installments != null) {
        if(installments > 1) {
            const expenses = []
            for (let index = 0; index < installments; index++) {
                const currentInstallment = index + 1;
                console.log(currentInstallment)
                expenses.push(new Expense({
                    title: title,
                    value: value,
                    category: categories,
                    installments: {
                        numberOfInstallments: installments,
                        current: index + 1
                    }
                }))
            }
            const promises = expenses.map(expense => {
                return expense.save()
            })
            return Promise.all(promises)
            
        } else {
            const expense = new Expense({
                title: title,
                value: value,
                category: categories
            });
            return expense.save()
        }
    }
   
}