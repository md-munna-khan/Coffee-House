import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './assets/Pages/Home.jsx';
import Coffees from './assets/Pages/Coffees.jsx';
import Dashboard from './assets/Pages/Dashboard.jsx';
import CoffeeCards from './Components/CoffeeCards.jsx';
import CoffeeDetails from './assets/Pages/CoffeeDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout> ,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children :[
      {
        path: '/',
        element: <CoffeeCards></CoffeeCards>,
        loader:()=> fetch('../coffees.json')
      },
      {
        path: '/category/:categoryId',
        element: <CoffeeCards></CoffeeCards>,
        loader:()=> fetch('../coffees.json')
      },
        ]
      },
      {
        path: '/coffees',
        element: <Coffees></Coffees>,
        loader:()=> fetch('../coffees.json')
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/coffee/:id',
        element:<CoffeeDetails></CoffeeDetails> ,
        loader:()=> fetch('../coffees.json')
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
