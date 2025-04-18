import React, { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitteed");
  };

  const handlePassOnChanged = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="" placeholder="Email" required />{" "}
        <br />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Password"
          onChange={handlePassOnChanged}
          defaultValue={password}
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledField;
