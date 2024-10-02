import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Service from './Sevice.jsx'
import Project from './project.jsx'


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
  ,
  {
    path:'/project',
    element:<Project />

  }
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={main} />,
)
