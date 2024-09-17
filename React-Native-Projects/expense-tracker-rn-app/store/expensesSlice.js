import { createSlice } from "@reduxjs/toolkit";
import getFormattedDate from "../utils/date.js";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: { expenses: [] },
  reducers: {
    setExpense: (state, action) => {
      state.expenses = action.payload;
    },
    addExpense: (state, action) => {
      state.expenses.push({ ...action.payload.expense });
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload.id,
      );
    },
    updateExpense: (state, action) => {
      const updatableExpenseIdx = state.expenses.findIndex(
        (expense) => expense.id === action.payload.id,
      );
      state.expenses[updatableExpenseIdx] = { ...action.payload };
    },
  },
});

export default expensesSlice.reducer;
export const { addExpense, removeExpense, updateExpense, setExpense } =
  expensesSlice.actions;
