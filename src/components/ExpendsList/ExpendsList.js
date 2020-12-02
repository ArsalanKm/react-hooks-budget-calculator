import React from "react";
import ExpendsItem from "../ExpendsItem/ExpendsItem";
import { MdDelete } from "react-icons/md";
import "./ExpendsList.styles.css";
const ExpendsList = ({ expenses, handleClear, handleDelete, handleEdit }) => {
  const renderdItems = expenses.map((item) => {
    return (
      <ExpendsItem
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        key={item.id}
        item={item}
      />
    );
  });
  return (
    <>
      <ul className="list">{renderdItems}</ul>
      {expenses.length > 0 && (
        <button onClick={handleClear} className="btn">
          clear expenses
          <MdDelete className="btn-icon"></MdDelete>
        </button>
      )}
    </>
  );
};

export default ExpendsList;
