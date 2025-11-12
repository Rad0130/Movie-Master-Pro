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
import AuthProvider from './Provider/AuthProvider';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddMovies from './Pages/AddMovies/AddMovies';
import Update from './Pages/Update/Update';


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
        path:'/addmovies',
        element:<PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path:'/update/:id',
        loader:()=>fetch('http://localhost:3000/movies'),
        Component:Update
      }
    ]
  },
  {
    path:'/details/:id',
    loader:()=>fetch('http://localhost:3000/movies'),
    element:<PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>
  },
  {
    path:'/collections',
    Component:MyCollections
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
)
