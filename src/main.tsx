import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import NavContextProvider from './api/ApiStartW';
import RoutesCom from '../src/Routes/Routes';


createRoot(document.getElementById('root') as Element).render(
  


  <React.StrictMode>
    <NavContextProvider>
    <RoutesCom/>
    </NavContextProvider>
  </React.StrictMode>
)