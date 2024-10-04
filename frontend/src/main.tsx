import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={ queryClient }>
            <ChakraProvider theme={ theme }>
                <ColorModeScript initialColorMode={ theme.config.initialColorMode }/>
                <Provider store={ store }>
                    <App/>
                </Provider>
            </ChakraProvider>
        </QueryClientProvider>
    </React.StrictMode>,
)
