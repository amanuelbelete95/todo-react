
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TodoContainer from './components/TodoContainer'
// stylesheet
import './index.css';


const value = ReactDOM.createRoot(document.getElementById('root'));
value.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
);
