import React from "react";

export default ({ items }) => {
  const numItems = items.len;
  const dietariesCount = {};

  items.forEach(({ dietaries }) => {
    dietaries.forEach(dietary => {
      dietariesCount[dietary] = dietariesCount[dietary] + 1 || 0;
    });
  });
  console.dir(dietariesCount);

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{numItems} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.keys(dietariesCount).map(dietary => (
              <div className="dietary-yo" style={{ display: 'inline-block'}}>
                {" "}
                {dietariesCount[dietary]}x{" "}
                <span className="dietary">{dietary} </span>{" "}
              </div>
            ))}

            {/* 6x <span className="dietary">ve</span>
          4x <span className="dietary">v</span>
          12x <span className="dietary">n!</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};
