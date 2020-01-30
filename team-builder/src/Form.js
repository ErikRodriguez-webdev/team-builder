import React, { useState } from "react";

function Form(props) {
  const [aMember, setAMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  //User info handler here
  const changeHandler = (event) => {
    setAMember({ ...aMember, [event.target.name]: event.target.value });
  };

  //Submit handler here
  const submitHandler = (event) => {
    event.preventDefault();
    props.addNewMember(aMember);
    setAMember({ name: "", email: "", role: "" });
  };

  //Form layout is here
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Enter Full Name"
        onChange={changeHandler}
        value={aMember.name}
      />
      <br />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="text"
        placeholder="Email"
        onChange={changeHandler}
        value={aMember.email}
      />
      <br />

      <label htmlFor="role">Role: </label>
      <input
        id="role"
        name="role"
        type="text"
        placeholder="Enter Role"
        onChange={changeHandler}
        value={aMember.role}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
