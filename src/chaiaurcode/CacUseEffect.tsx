import React, { FC, useEffect, useState } from "react";
const CacUseEffect: FC = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  const onSubmit = () => {
    console.log(name);
    console.log(email);
  };

  useEffect(() => {
    console.log("Component Mounted");
    return () => {
      console.log("Component UnMounted");
    };
  }, []);

  useEffect(() => {
    console.log("use effect called");
  }, [name, email]);

  return (
    <React.Fragment>
      <div>{name}</div>
      <div>{email}</div>
      <input
        name="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
      /><br/><br/>
      <input
        name="email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={onSubmit}>Submit</button>
    </React.Fragment>
  );
};
export default CacUseEffect;
