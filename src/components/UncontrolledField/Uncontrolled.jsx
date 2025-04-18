import React, { useRef } from "react";

const Uncontrolled = () => {
  const emailRef = useRef("");

  const passRef = useRef("");

  const handleSubmitted = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    console.log("email:", email, "pass:", pass);
  };

  return (
    <div>
      <form onSubmit={handleSubmitted}>
        <input ref={emailRef} type="email" name="email" placeholder="email" />{" "}
        <br />
        <input
          ref={passRef}
          type="password"
          name="password"
          placeholder="password"
        />{" "}
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Uncontrolled;
