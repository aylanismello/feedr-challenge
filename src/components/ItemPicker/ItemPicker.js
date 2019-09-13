import React from "react";
import Item from '../Item';

export default ({ items }) => (
  <div className="col-4">
    <ul className="item-picker">
      {items.map(item => (
        <Item {...item} />
      ))}
    </ul>
  </div>
);
