import React, { useState } from "react";
import validator from "validator";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [errPassword, setErrPassword] = useState(false);
  const handleOnChange = (e) => {
    setPassword(e.target.value);
    console.log("email input >>>>>>", password);
    validator.isStrongPassword(password)
      ? setErrPassword(false)
      : setErrPassword(true);
  };
  return (
    <div>
      <label for="password">
        Password <span class="text-muted">(Optional)</span>
      </label>
      <input
        type="password"
        class="form-control"
        id="password"
        name="password"
        value={password}
        placeholder="password"
        onChange={handleOnChange}
      />
      {errPassword ? (
        <div style={{ color: "red" }}>Weak password </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default PasswordInput;
