import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.js'
import CurrentDate from './components/CurrentDate.jsx'
import App from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  
    <ChakraProvider theme={theme} >
      <ColorModeScript
      initialColorMode={theme.config.initialColorMode} />
    <CurrentDate />
    <App />
    </ChakraProvider>
  ,
)
