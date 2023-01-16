import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Log from './Component/LogIn/Log';
import About from './Component/home/About';
import Registration from './Component/Registration/Registration';
import reggestraion from './Component/Registration/reggestraion'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/LogIn",
    element: <Log/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Registration",
    element: <Registration/>,
  },
  {
    path: "/reggestraion",
    element: <reggestraion/>,
  }
]);

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
