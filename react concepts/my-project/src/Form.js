import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

function Form() {
  const [email, updateemail] = useState("");
  const [password, updatepassword] = useState("");

  return (
    <>
      <div className="border rounded p-4 mt-5 mx-auto" style={{ width: "350px" }}>
        <h2 className="text-primary text-center mb-4">Login Form</h2>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="form-control"
            value={email}
            onChange={(e) => updateemail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="form-control"
            value={password}
            onChange={(e) => updatepassword(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={() => {
            console.log("Email: " + email);
            console.log("Password: " + password);
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Form;