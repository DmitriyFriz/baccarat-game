import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { StoreProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
