import React from 'react';
import ReactDOM from 'react-dom';
import { TaskProvider } from './Context/ContextProvider';
import reducer, { initialState } from './Context/reducer';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <TaskProvider reducer={reducer} initialState={initialState} > 
      <App />
    </TaskProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
