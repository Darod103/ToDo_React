import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.js'
import CurrentDate from './components/CurrentDate.jsx'
import App from './App.jsx'
import Home from './components/Home.jsx';
import About from './components/About.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider theme={theme} >
      <ColorModeScript
      initialColorMode={theme.config.initialColorMode} />
    <CurrentDate />
    <RouterProvider router={router} >
   
    </RouterProvider>
    </ChakraProvider>
    
  ,
)
