import { createContext, useContext } from 'react';
import CommonStore from './commonStore';
import ModalStore from './modalStore';
import UserStore from './userStore';

interface Store {
  modalStore: ModalStore;
  commonStore: CommonStore;
  userStore: UserStore;
}

export const store: Store = {
  modalStore: new ModalStore(),
  commonStore: new CommonStore(),
  userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
  return useContext(StoreContext);
}
