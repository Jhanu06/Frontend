import { useDispatch } from "react-redux";
import { useState } from "react";
import { deposit, withdraw, updateFullName, updateMobile } from "./store"; // adjust path if needed

export default function Form() {
  const [amount, setAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1> Form </h1>
      <div className="row">
        <div className="col-4">
          <input
            className="form-control"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary col-1"
          onClick={() => {
            dispatch(deposit(Number(amount)));
            setAmount("");
          }}
        >
          Deposit
        </button>

        <button
          className="btn btn-danger col-1 mx-2"
          onClick={() => {
            dispatch(withdraw(Number(amount)));
            setAmount("");
          }}
        >
          Withdraw
        </button>

        <div className="row mt-4">
          <div className="col-4">
            <input
              className="form-control"
              type="text"
              placeholder="Enter Fullname"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch(updateFullName(fullName));
              setFullName("");
            }}
          >
            Update
          </button>
        </div>

        <div className="row mt-4">
          <div className="col-4">
            <input
              className="form-control"
              type="number"
              placeholder="Enter Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button
            className="btn btn-primary col-1"
            onClick={() => {
              dispatch(updateMobile(mobile));
              setMobile("");
            }}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
