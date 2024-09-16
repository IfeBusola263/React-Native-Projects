import { configureStore } from '@reduxjs/toolkit';
import expenseReducer from './expensesSlice.js'

export const store = configureStore({
    reducer: { expenses: expenseReducer }
});
