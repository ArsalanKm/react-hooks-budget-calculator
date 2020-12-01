import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
const ExpendsItem = ({
  item: { charge, amount, id },
  handleDelete,
  handleEdit,
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>
      <button className="edit-btn" aria-label="edit button">
        <MdEdit onClick={() => handleEdit(id)} />
      </button>
      <button className="clear-btn" aria-label="delete button">
        <MdDelete onClick={() => handleDelete(id)} />
      </button>
    </li>
  );
};

export default ExpendsItem;
