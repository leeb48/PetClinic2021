import { createContext, useContext } from "react";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import PetOwnerStore from "./petOwnerStore";
import UserStore from "./userStore";

interface Store {
  modalStore: ModalStore;
  commonStore: CommonStore;
  userStore: UserStore;
  petOwnerStore: PetOwnerStore;
}

export const store: Store = {
  modalStore: new ModalStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
  petOwnerStore: new PetOwnerStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
