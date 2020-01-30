import React from "react";

function CardMaker(props) {
  console.log(props);
  return (
    <div>
      {props.memberList.map((items) => (
        <div key={items.id}>
          <h2>{items.name}</h2>
          <p>{items.email}</p>
          <p>{items.role}</p>
        </div>
      ))}
    </div>
  );
}

export default CardMaker;
