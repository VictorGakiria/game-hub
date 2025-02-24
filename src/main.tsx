import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './STYLES&PROPS'
import theme from './theme'
import './index.css'
import FlexLayout from './flexlayout'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <FlexLayout/>
    </ChakraProvider>
  </React.StrictMode>,
)
