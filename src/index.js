import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./page/Login"
import { Dashboard } from "./page/dashboard"
import { UserManage } from "./page/usrManage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element:  <Dashboard/>
  },
  {
    path: "/usr-manage",
    element: <UserManage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
