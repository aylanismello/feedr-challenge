import React from 'react';

export default ({ name, dietaries, canRemove }) => (
  <li className="item">
    <h2>{name}</h2>
    <p>
      {dietaries.map(dietary => (
        <span className="dietary">{dietary}</span>
      ))}
    </p>
    {canRemove && <button className="remove-item">x</button>}
  </li>
);