import agent from 'app/api/agent';
import { User, UserFormValues } from 'app/models/user';
import { history } from 'index';
import { makeAutoObservable, runInAction } from 'mobx';
import { store } from './store';

export default class UserStore {
  user: User | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  get isLoggedIn() {
    return !!this.user;
  }

  currentUser = async () => {
    try {
      const user = await agent.Account.currentUser();
      runInAction(() => (this.user = user));
    } catch (error) {
      console.log(error);
    }
  };

  register = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.register(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      history.push('/');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  login = async (creds: UserFormValues) => {
    try {
      const user = await agent.Account.login(creds);
      store.commonStore.setToken(user.token);
      runInAction(() => (this.user = user));
      history.push('/');
      store.modalStore.closeModal();
    } catch (error) {
      throw error;
    }
  };

  logout = () => {
    this.user = null;
    store.commonStore.setToken(null);
  };
}
