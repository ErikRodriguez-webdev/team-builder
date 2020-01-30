import React, { useState } from "react";

function Form(props) {
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  //User info handler here
  const changeHandler = (event) => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  //Submit handler here
  const submitHandler = (event) => {
    event.preventdefault();
    props.addNewMember(member);
    setMember({ name: "", email: "", role: "" });
  };

  //Form layout is here
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">Full Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        onChange={changeHandler}
        value={member.name}
      />
      <br />

      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        onChange={changeHandler}
        value={member.email}
      />
      <br />

      <label htmlFor="role">Select Role: </label>
      <select
        id="role"
        name="role"
        onChange={changeHandler}
        value={member.role}
      >
        <option value="front end">Front End</option>
        <option value="back end">Back End</option>
        <option value="full stack">Full Stack</option>
        <option value="full stack">Full Stack</option>
        <option value="ui designer">UI Designer</option>
      </select>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
