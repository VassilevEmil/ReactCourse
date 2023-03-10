import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenceDate from "./ExpenceDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenceDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
