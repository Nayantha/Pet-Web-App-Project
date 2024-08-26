import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={ queryClient }>
            <ChakraProvider theme={ theme }>
                <ColorModeScript initialColorMode={ theme.config.initialColorMode }/>
                <App/>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
