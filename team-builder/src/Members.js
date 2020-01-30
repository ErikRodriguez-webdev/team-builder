import React from "react";

function CardMaker(props) {
  console.log(props);
  return (
    <div>
      {props.memberList.map((note) => (
        <div className="note" key={note.id}>
          <h2>{note.name}</h2>
          <p>{note.email}</p>
          <p>{note.role}</p>
        </div>
      ))}
    </div>
  );
}

export default CardMaker;
