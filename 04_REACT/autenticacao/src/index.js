import React from 'react';
import ReactDOM from 'react-dom';
import App from './aula-42/App';
import { UserProvider } from './aula-42/providers/provider';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

