import axios from "axios";

const getShips = async () => {
  // will make API Call In here to get Ship Info
  let response = await axios(`https://swapi.dev/api/starships`);
  console.log(response);

  return response.data.results;
};

export default getShips;
