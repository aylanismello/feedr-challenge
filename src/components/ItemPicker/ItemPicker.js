import React from "react";
import Item from "../Item";

export default ({ items, selectItem }) => (
  <div className="col-4">
    <ul className="item-picker">
      {items.map(({ name, dietaries, id }) => (
        <Item
          name={name}
          dietaries={dietaries}
          key={id}
          handleClick={selectItem}
          id={id}
        />
      ))}
    </ul>
  </div>
);
