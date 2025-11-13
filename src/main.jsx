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
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import ErrorBoundary from './Pages/ErrorPage/ErrorBoundary';


const router = createBrowserRouter([
  {
    path: "/",
    Component:HomepageLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        Component:Home
      },
      {
        path:'/allmovies',
        loader:()=>fetch('http://localhost:3000/movies'),
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
    element:<PrivateRoute><MyCollections></MyCollections></PrivateRoute>
  },
  {
    path:'/login',
    Component:Login
  },
  {
    path:'/register',
    Component:Register
  },
  {
    path:'/error',
    Component:ErrorPage
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
)
