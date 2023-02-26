import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  let ship = props.shipProp; //setting ship prop for all ships page to a variable(pulling out the prop)
  const navigate = useNavigate();
  const handleClick = (starShipClass) => {
    console.log("clicked");
    console.log(starShipClass);
    navigate(`/single_ship/${starShipClass}`);
  };
  // will need onClick function to display the ships when card is clicked
  return (
    <div onClick={() => handleClick(ship.starship_class)} id="card-div">
      {ship.name}
    </div>
  );
};

export default Card;
