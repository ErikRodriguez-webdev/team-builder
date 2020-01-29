import React, { useState } from "react";

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

  //Form layout is here
  return (
    <form>
      <label htmlFor="name">Full Name: </label>
      <input name="name" type="text" placeholder="First Name" />
      <br />

      <label htmlFor="email">Email: </label>
      <input name="email" type="email" placeholder="Email" />
      <br />

      <label htmlFor="role">Select Role: </label>
      <select>
        <option value="front end">Front End</option>
        <option value="back end">Back End</option>
        <option value="full stack">Full Stack</option>
      </select>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
