import { useStore } from "app/store/store";
import { observer } from "mobx-react-lite";
import React from "react";
import { useEffect } from "react";
import PetOwnerListItem from "./PetOwnerListItem";

const PetOwnerList = () => {
  const {
    petOwnerStore: { getAllPetOwners, loadPetOwners },
  } = useStore();

  useEffect(() => {
    loadPetOwners();
  }, [loadPetOwners]);

  return (
    <>
      {getAllPetOwners.map((petOwner) => (
        <PetOwnerListItem key={petOwner.id} petOwner={petOwner} />
      ))}
    </>
  );
};

export default observer(PetOwnerList);
