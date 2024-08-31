// src/components/CarItem.js

import React from 'react';

const CarItem = ({ car }) => {
  return (
    <tr>
      <td>{car.model}</td>
      <td>{car.brand}</td>
      <td>&#8377; {car.price}</td>
      <td>{car.isSUV ? "Yes" : "No"}</td>
    </tr>
  );
};

export default CarItem;
