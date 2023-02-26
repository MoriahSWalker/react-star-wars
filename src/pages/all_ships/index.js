import React, { useEffect, useState } from "react";
import Card from "../../components/ship_card";
import getShips from "../../services/sw-api";

const AllShips = () => {
  const [shipData, setShipData] = useState([]);
  console.log(shipData);
  useEffect(() => {
    const makeApiCall = async () => {
      // variable for all ship and we are awaiting ship data from api call
      let ships = await getShips();
      setShipData(ships); // changing the state of shipData to data from api call
    };
    makeApiCall(); //calling the function
  }, []);

  // making JSX to return information
  // mapping through shipData and returning array
  let shipsJSX = shipData.map((ship) => {
    return <Card key={ship.url} shipProp={ship} />; //passing ship data to Card component
  });
  return (
    <div>
      {/* All Star Wars Ships */}
      {shipsJSX}
    </div>
  );
};

export default AllShips;
