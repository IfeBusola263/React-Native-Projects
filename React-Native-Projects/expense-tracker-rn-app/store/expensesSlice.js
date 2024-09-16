import { createSlice } from '@reduxjs/toolkit';
import getFormattedDate from '../utils/date.js'

const DUMMY_EXPENSES = [

	{
	    id: 'e1',
	    description: 'A pair of shoes',
	    amount: 167.99,
	    date: getFormattedDate(new Date('2024-09-23'))
	},
	{
	    id: 'e2',
	    description: 'A pair of trousers',
	    amount: 299.99,
	    date: getFormattedDate(new Date('2024-09-04'))
	},
	{
	    id: 'e3',
	    description: 'Bags',
	    amount: 299.99,
	    date: getFormattedDate(new Date('2024-09-10'))
	},
	{
	    id: 'e4',
	    description: 'Tithe',
	    amount: 167.99,
	    date: getFormattedDate(new Date('2024-09-14'))
	},
	{
	    id: 'e5',
	    description: 'Mifi Battery',
	    amount: 299.99,
	    date: getFormattedDate(new Date('2024-09-10'))
	},
	{
	    id: 'e6',
	    description: "Light's feeding Bag",
	    amount: 299.99,
	    date: getFormattedDate(new Date('2024-09-15'))
	},
	{
	    id: 'e7',
	    description: 'A pair of shoes',
	    amount: 167.99,
	    date: getFormattedDate(new Date('2024-09-23'))
	},
	{
	    id: 'e8',
	    description: 'Pledge',
	    amount: 299.99,
	    date: getFormattedDate(new Date('2024-09-01'))
	},
	{
	    id: 'e9',
	    description: 'Bags',
	    amount: 299.99,
	    date: getFormattedDate(new Date('2024-09-02'))
	}
    ];

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {expenses: DUMMY_EXPENSES},
    reducers: {
	addExpense: (state, action) => {
	    const id = new Date().toString() + Math.random.toString();
	    state.expenses.push({...action.payload.expense, id: id})
	},
	removeExpense: (state, action) => {
	    state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id)
	},
	updateExpense: (state, action) => {
	    const updatableExpense = state.expenses.find((expense) => expense.id === action.payload.id);
	    updateableExpense = {...action.payload}
	}
    }
});


export default expensesSlice.reducer;
export const {addExpense, removeExpense} = expensesSlice.actions;
