//front end business logic
export function filterCarByBrand(cars, selectedBrand) {
  const filteredResult = cars.filter((cr) => cr.brand.includes(selectedBrand));
  return filteredResult;
}

export function filterCarsBySUV(cars, selectedSUV) {
  if (selectedSUV === "SUV") {
    return cars.filter((cr) => cr.isSUV === true);
  } else if (selectedSUV === "NON SUV") {
    return cars.filter((cr) => cr.isSUV === false);
  } else return cars;
}

export const filterUniqueCarBrands = (cars) => {
  const carBrands = cars.map((car) => car.brand); //transforming cars into brands
  const uniqueBrands = carBrands.filter(
    (brand, index, array) => array.indexOf(brand) === index
  );
  return uniqueBrands;
};
export const filterUniqueSuvs = (cars) => {
  // Remove duplicate SUV and Non-SUV
  const suvCars = cars.map((car) => (car.isSUV ? "SUV" : "NON SUV"));
  const uniqueSUV = suvCars.filter(
    (car, index, array) => array.indexOf(car) === index
  );

  return uniqueSUV;
};
