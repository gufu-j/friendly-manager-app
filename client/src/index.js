import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';


import { BrowserRouter } from 'react-router-dom';

//import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
