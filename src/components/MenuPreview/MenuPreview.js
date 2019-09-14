import React from "react";
import Item from "../Item";
import items from "../../items";

export default ({ items, unselectItem }) => {
  return (
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {items.map(({ name, dietaries, id }) => (
          <Item
            key={id}
            name={name}
            dietaries={dietaries}
            id={id}
            handleClick={unselectItem}
            canRemove
          />
        ))}
      </ul>
    </div>
  );
};
