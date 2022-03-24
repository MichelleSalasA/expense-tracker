import React from 'react';
import NewExpense from './Components/NewExpense/NewExpense';
import Expenses from "./Components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Rent',
      amount: 500,
      date: new Date(2022, 0, 1),
    },
    {
      id: 'e2', 
      title: 'Vacations', 
      amount: 250, 
      date: new Date(2022, 0, 5)
    },
    {
      id: 'e3',
      title: 'Food',
      amount: 100,
      date: new Date(2022, 0, 10),
    },
    {
      id: 'e4',
      title: 'Streaming Services',
      amount: 20,
      date: new Date(2021, 0, 2),
    },
  ];

  const addExpenseHandler = expense => {
    console.log('App');
    console.log('expense', expense);
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
