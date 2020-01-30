import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Members from "./Members";

function App() {
  const [memberList, setMemberList] = useState([
    {
      id: 0,
      name: "John Smith",
      email: "jsmith12345@email.com",
      role: "Full Stack"
    }
  ]);
  const addNewMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMemberList([...memberList, newMember]);
  };

  return (
    <div className="App">
      <h1>Member List Form</h1>
      <Form addNewMember={addNewMember} />
      <Members memberList={memberList} />
    </div>
  );
}

export default App;
