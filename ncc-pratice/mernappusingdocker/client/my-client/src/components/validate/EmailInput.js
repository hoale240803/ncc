import React, { useState } from "react";
import validator from "validator";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [errEmail, setErrEmail] = useState(false);
  const handleOnChange = (e) => {
    setEmail(e.target.value);
    console.log("email input >>>>>>", email);
    validator.isEmail(email) ? setErrEmail(false) : setErrEmail(true);
  };
  return (
    <div>
      <label for="email">
        Email <span className="text-muted">(Optional)</span>
      </label>
      <div>Input value: {email}</div>
      <input
        type="email"
        className="form-control"
        id="email"
        name="email"
        value={email}
        placeholder="you@example.com"
        onChange={handleOnChange}
      />
      <div className="invalid-feedback">
        Please enter a valid email address for shipping updates.
      </div>
      {errEmail ? (
        <div style={{ color: "red" }}>Please check again email </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default EmailInput;
