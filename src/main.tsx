import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript, Grid } from '@chakra-ui/react'
//import App from './STYLES&PROPS'
import theme from './theme'
import './index.css'
import FlexLayout from './components/NavBar'
import Grids from './components/grid'
//import FlexLayout from './flexlayout'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <Grids/>
    </ChakraProvider>
  </React.StrictMode>,
)
