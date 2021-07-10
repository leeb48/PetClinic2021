import React from 'react';
import HomePageApptListItem from './HomePageApptListItem';

const HomePageApptList = () => {
  let arr = [1, 2, 3, 4, 5];

  return (
    <>
      {arr.map((card) => (
        <HomePageApptListItem key={card} />
      ))}
    </>
  );
};

export default HomePageApptList;
