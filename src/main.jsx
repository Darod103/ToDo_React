import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme.js'
import CurrentDate from './components/CurrentDate.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
      <ColorModeScript
      initialColorMode={theme.config.initialColorMode} />
    <CurrentDate />
    
    </ChakraProvider>
  </React.StrictMode>,
)
