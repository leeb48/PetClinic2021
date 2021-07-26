import { User, UserFormValues } from 'app/models/user';
import { store } from 'app/store/store';
import axios, { AxiosError, AxiosResponse } from 'axios';

const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use((config) => {
  const token = store.commonStore.token;

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axios.interceptors.response.use(
  async (response) => {
    await sleep(1000);

    return response;
  },
  (error: AxiosError) => {
    //TODO: Handle errors here to show pop ups
    const { data, status, config } = error.response!;

    switch (status) {
      case 400:
        if (typeof data === 'string') {
          console.log('Simple Server Error', data);
        }

        if (data.errors) {
          const modalStateErrors = Object.values(data.errors);

          throw modalStateErrors.flat();
        }
        break;
    }
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),

  post: <T>(url: string, body: {}) =>
    axios.post<T>(url, body).then(responseBody),

  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),

  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Account = {
  currentUser: () => requests.get<User>('/account'),

  register: (user: UserFormValues) =>
    requests.post<User>('/account/register', user),

  login: (user: UserFormValues) => requests.post<User>('/account/login', user),
};

const agent = {
  Account,
};

export default agent;
