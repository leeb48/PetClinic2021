import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { App } from './App';
import { createBrowserHistory } from 'history';
import './app/styles/Calendar.css';
import { store, StoreContext } from './app/store/store';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <StoreContext.Provider value={store}>
        <Router history={history}>
          <App />
        </Router>
      </StoreContext.Provider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
