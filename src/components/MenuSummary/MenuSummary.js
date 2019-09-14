import React from "react";

export default ({ items }) => {
  const numItems = items.length;
  const dietariesCount = {};

  items.forEach(({ dietaries }) => {
    dietaries.forEach(dietary => {
      dietariesCount[dietary] = (dietariesCount[dietary] || 0) + 1;
    });
  });

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span className="num-items">{numItems} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.keys(dietariesCount).map(dietary => (
              <div
                key={dietary}
                className="dietary-type"
                style={{ display: "inline-block" }}
              >
                {" "}
                {dietariesCount[dietary]}x{" "}
                <span className="dietary">{dietary} </span>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
