import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Sevice.jsx'


import './index.css'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';

const main=createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/about',
    element:<About />

  }
  ,
  {
    path:'/service',
    element:<Service />

  }
  ,
  {
    path:'/contact',
    element:<Contact />

  }
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={main} />,
)
