import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomepageLayout from './components/Layouts/HomepageLayout';
import Home from './Pages/Home/Home';
import AllMovies from './Pages/AllMovies/AllMovies';
import MyCollections from './Pages/MyCollections/MyCollections';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomepageLayout,
    children:[
      {
        path:"/",
        Component:Home
      },
      {
        path:'/allmovies',
        Component:AllMovies
      },
      {
        path:'/collections',
        Component:MyCollections
      }
    ]
  },
  {
    path:'/login',
    Component:Login
  },
  {
    path:'/register',
    Component:Register
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
