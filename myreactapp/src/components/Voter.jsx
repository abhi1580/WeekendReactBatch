import React from "react";

const Voter = ({ citizen }) => {
  //   //conditional rendering
  //   if (citizen.age > 18) {
  //     return (
  //       <h2 style={{ color: "green" }}>
  //         Dear {citizen.name} you are eligible for voting
  //       </h2>
  //     );
  //   } else {
  //     return (
  //       <h2 style={{ color: "red" }}>
  //         Sorry {citizen.name} you are not eligible for voting
  //       </h2>
  //     );
  //     // return null //conditionally return nothing
  //   }

//   return citizen.age >= 18 ? (
//     <h2 style={{ color: "green" }}>
//       Dear {citizen.name} you are eligible for voting
//     </h2>
//   ) : (
//     <h2 style={{ color: "red" }}>
//       Dear {citizen.name} you are not eligible for voting
//     </h2>
//   );
return citizen.age>=18&& <h2 style={{color:"greenyellow"}}>Hi {citizen.name}, eligible for voting</h2>
};

export default Voter;
