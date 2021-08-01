import React from "react";
import VeterinarianListItem from "./VeterinarianListItem";

const VeterinarianList = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((card) => (
        <VeterinarianListItem key={card} />
      ))}
    </>
  );
};

export default VeterinarianList;
