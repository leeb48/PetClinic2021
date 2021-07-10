import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { App } from './App';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Router history={history}>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
