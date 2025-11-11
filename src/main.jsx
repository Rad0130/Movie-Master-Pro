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


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomepageLayout,
    children:[
      {
        path:"/",
        loader:()=>fetch('http://localhost:3000/movies'),
        Component:Home
      },
      {
        path:'/allmovies',
        loader:()=>fetch('http://localhost:3000/movies'),
        Component:AllMovies
      },
      {
        path:'/collections',
        Component:MyCollections
      },
      {
        path:'/addmovies',
        element:<PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      }
    ]
  },
  {
    path:'/details/:id',
    loader:()=>fetch('http://localhost:3000/movies'),
    element:<PrivateRoute><MovieDetails></MovieDetails></PrivateRoute>
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
