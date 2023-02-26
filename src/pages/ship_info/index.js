import React from "react";
import { useParams } from "react-router-dom";

const ShipInfo = () => {
  let { starShipClass } = useParams;
  return (
    <div className="page-container">
      <h2> Ship Information </h2>
      {/* how can i get the ship info to display here? */}
      <div> {starShipClass} </div>
    </div>
  );
};

export default ShipInfo;
