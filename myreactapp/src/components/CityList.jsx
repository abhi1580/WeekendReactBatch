import React from "react";
import CityItem from "./CityItem";
const cities = ["Pune", "Mumbai", "Latur","Indore","Patna"];

const CityList = () => {
  // let cityItems = cities.map((c) => <CityItem key={c} city={c} />);
  let filteredCities=cities.filter(c=>c.startsWith("P")||c.startsWith("M"))
  const filterCitiesStartWithP=filteredCities.map(fc=><CityItem key={fc} city={fc}/>)
  return <ol>{filterCitiesStartWithP}</ol>;
};

export default CityList;
