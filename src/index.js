import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { UserProvider } from './contexts/user.context';
import { DataProvider } from './contexts/data.context';
import {MenuProvider} from './contexts/menu.context'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <DataProvider>
  <UserProvider>
  <MenuProvider>
  <App />
  </MenuProvider>
  </UserProvider>
  </DataProvider>
  </BrowserRouter>
    
);


