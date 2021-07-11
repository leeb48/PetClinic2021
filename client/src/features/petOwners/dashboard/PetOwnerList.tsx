import React from 'react';
import PetOwnerListItem from './PetOwnerListItem';

const PetOwnerList = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((card) => (
        <PetOwnerListItem key={card} />
      ))}
    </>
  );
};

export default PetOwnerList;
