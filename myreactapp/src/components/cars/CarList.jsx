import React, { useState } from "react";
import cars from "../data/carData";
import CarItem from "./CarItem";
import {
  filterCarByBrand,
  filterCarsBySUV,
  filterUniqueCarBrands,
  filterUniqueSuvs,
} from "./models/car_filter";
import BrandButton from "./BrandButton";

const CarList = () => {
  const [filteredResult, setFilteredResult] = useState(cars);

  // Mapping the filtered car list
  const totalCarList = filteredResult.map((c) => (
    <CarItem key={c.model} car={c} />
  ));

  // Handle the select list change
  const handleSUVChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "All") {
      // Show all cars if "All" is selected
      setFilteredResult(cars);
    } else {
      // Filter cars based on the selected SUV type
      const filteredSUVCars = filterCarsBySUV(cars, selectedValue);
      setFilteredResult(filteredSUVCars);
    }
  };
  //get the undiqque brand car
  const uniqueBrands = filterUniqueCarBrands(cars);
  uniqueBrands.splice(0, 0, "All");
  return (
    <div className="d-flex flex-column gap-3 border rounded p-4 mt-3">
      <div className="d-flex gap-2 justify-content-center">
        {uniqueBrands.map((brand) => (
          <BrandButton
            brandStyle={
              brand === "All"
                ? "btn btn-outline-success"
                : "btn btn-outline-secondary"
            }
            onFilter={() =>
              brand === "All"
                ? setFilteredResult(cars)
                : setFilteredResult(filterCarByBrand(cars, brand))
            }
            key={brand}
          >
            {brand}
          </BrandButton>
        ))}
      </div>

      {/* Based on select list value, render table data */}
      <div className="mb-2">
        <select className="form-select" onChange={handleSUVChange}>
          <option value={""}>All</option>
          {filterUniqueSuvs(cars).map((suv) => (
            <option key={suv} value={suv}>
              {suv}
            </option>
          ))}
        </select>
      </div>
      <div>
        <table className="table table-striped">
          <thead>
            <tr className="table-dark">
              <th>Car Model</th>
              <th>Brand</th>
              <th>Price</th>
              <th>SUV</th>
            </tr>
          </thead>
          <tbody>{totalCarList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CarList;
