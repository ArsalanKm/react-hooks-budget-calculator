import React from "react";
import { MdSend } from "react-icons/md";
const ExpendsForm = ({
  charge,
  amount,
  handleSubmit,
  handleCharge,
  handleAmount,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">charge</label>

          <input
            className="form-control"
            id="charge"
            name="charge"
            placeholder="e.g rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">amount</label>

          <input
            className="form-control"
            id="amount"
            type="number"
            name="amount"
            placeholder="e.g 1000"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        <MdSend className="btn-icon"></MdSend>
      </button>
    </form>
  );
};

export default ExpendsForm;
