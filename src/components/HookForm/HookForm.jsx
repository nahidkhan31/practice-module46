import React from "react";
import useInputField from "../../hooks/UseHookField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [pass, passOnChange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", name, email, pass);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          type="text"
          onChange={nameOnChange}
          name="name"
          placeholder="name"
        />
        <br />
        <input
          defaultValue={email}
          type="email"
          onChange={emailOnChange}
          name="email"
          placeholder="email"
        />
        <br />
        <input
          defaultValue={pass}
          type="password"
          onChange={passOnChange}
          name="password"
          placeholder="password"
        />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default HookForm;
