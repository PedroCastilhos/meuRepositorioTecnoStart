import React from 'react';
import ReactDOM from 'react-dom';
import {AppPrincipal, AppVisualizar, AppEditar} from './aula-30/coponents/App';

ReactDOM.render(
  <React.StrictMode>
    <AppPrincipal />
    <AppVisualizar />
    <AppEditar />
  </React.StrictMode>,
  document.getElementById('root')
);

