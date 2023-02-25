import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseHandler(expenseData);
    setIsVisible(false);
  };

  const makeVisibleHandler = () => {
    setIsVisible(true);
  };

  const cancelHandler = () => {
    setIsVisible(false);
  };

  return (
    <div className="new-expense">
      {!isVisible && (
        <button onClick={makeVisibleHandler}>Add New Expense</button>
      )}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
