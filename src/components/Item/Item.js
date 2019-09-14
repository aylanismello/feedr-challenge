import React from "react";

/* The Item's behavior will change on whether or not 
canRemove is true */

export default ({ name, dietaries, canRemove, handleClick, id }) => (
  <li
    className={`item${canRemove ? "" : " unselected"}`}
    onClick={() => {
      if (!canRemove) handleClick(id);
    }}
  >
    <h2>{name}</h2>
    <p>
      {dietaries.map(dietary => (
        <span key={dietary} className="dietary">
          {dietary}
        </span>
      ))}
    </p>
    {canRemove && (
      <button
        className="remove-item"
        onClick={() => {
          handleClick(id);
        }}
      >
        x
      </button>
    )}
  </li>
);
