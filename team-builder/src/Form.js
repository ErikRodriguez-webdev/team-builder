import React, { useState } from "react";
import App from "./App";

function CardMaker(obj) {
  return (
    <div>
      <div>
        <h2>Name: {obj.name}</h2>
        <h2>Email: {obj.email}</h2>
        <h2>Role: {obj.role}</h2>
      </div>
    </div>
  );
}

function Form() {
  //Members will populate here
  const [memberList, setMemberList] = useState([
    {
      id: 0,
      name: "John Smith",
      email: "jsmith12345@email.com",
      role: "Full Stack"
    }
  ]);
  console.log(memberList);

  //User info handler here
  const changeHandler = (event) => {
    setMemberList({ ...memberList, [event.target.name]: event.target.value });
  };

  //Submit handler here
  const submitHandler = (event) => {
    event.preventdefault();
  };

  //Form layout is here
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Full Name: </label>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="email">Email: </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="role">Select Role: </label>
        <select name="role" onChange={changeHandler}>
          <option value="front end">Front End</option>
          <option value="back end">Back End</option>
          <option value="full stack">Full Stack</option>
          <option value="full stack">Full Stack</option>
          <option value="ui designer">UI Designer</option>
        </select>
        <br />

        <button type="submit">Submit</button>
      </form>
      <App CardMaker={CardMaker} />
    </>
  );
}

export default Form;
