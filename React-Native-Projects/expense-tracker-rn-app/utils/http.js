import axios from "axios";

const url = "https://expense-tracker-db-8e63c-default-rtdb.firebaseio.com/";

export async function storeExpenses(expenseData) {
  const res = await axios.post(`${url}/expenses.json`, expenseData);
  return res.data.name; // used as Id for the expense
}

export async function fetchExpenses() {
  const res = await axios.get(`${url}/expenses.json`);

  const expenses = [];

  for (const key in res.data) {
    const expenseObj = {
      id: key,
      amount: +res.data[key].amount,
      date: res.data[key].date,
      description: res.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export async function modifyExpense(id, updatedExpenseData) {
  return axios.put(`${url}/expenses/${id}.json`, updatedExpenseData);
}

export async function deleteExpense(id) {
  return axios.delete(`${url}/expenses/${id}.json`);
}
