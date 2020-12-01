import "./App.css";
import { useState, useEffect } from "react";
import ExpendsForm from "./components/ExpendsForm/ExpendsForm";
import ExpendsList from "./components/ExpendsList/ExpendsList";
import Alert from "./components/Alert/Alert";
const { v1: uuidv1 } = require("uuid");

// const initialExpenses = [
//   { id: uuidv1(), charge: "rent", amount: 1600 },
//   { id: uuidv1(), charge: "car payment", amount: 600 },
//   { id: uuidv1(), charge: "credit card bill ", amount: 1200 },
// ];
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState(0);
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };

  // [] means just first time , nothing mean in every time
  useEffect(() => {
    console.log("user affect");
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount !== 0) {
      if (edit) {
        let temp = expenses.map((item) => {
          return item.id === editId ? { ...item, charge, amount } : item;
        });
        setExpenses(temp);
        setEdit(false);
      } else {
        const newItem = { id: uuidv1(), charge, amount };
        setExpenses([...expenses, newItem]);
        handleAlert({ type: "success", text: "charge added successfully" });
      }
      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: "you have to fill the inputs correctly",
      });
    }
  };
  const handleClear = () => {
    setExpenses([]);
    handleAlert({ type: "success", text: "charges list cleared !" });
  };
  const handleDelete = (id) => {
    handleAlert({ type: "danger", text: "item deleted !" });
    setExpenses([...expenses.filter((item) => item.id !== id)]);
  };
  const handleEdit = (id) => {
    let expense = expenses.find((item) => item.id === id);
    setCharge(expense.charge);
    setAmount(expense.amount);
    setEdit(true);
    setEditId(id);
  };
  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>budget calculator</h1>
      <main className="App">
        <ExpendsForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpendsList
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleClear={handleClear}
          expenses={expenses}
        />
      </main>
      <h1>
        total spending :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </>
  );
};

export default App;
