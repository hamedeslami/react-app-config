import "./assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {persistor, store} from '@store/store';
import {PersistGate} from "redux-persist/integration/react";
import {ThemeProvider} from '@mui/material/styles';
import theme from '@config/theme'
import {CssBaseline} from "@mui/material";
import {ToastContainer, Zoom} from "react-toastify";
import {setupInterceptorsTo} from "@config/configAxios";
import {BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import axios from "axios";
import App from './App'

setupInterceptorsTo(axios);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <ToastContainer
                        position="top-right"
                        transition={Zoom}
                        autoClose={5000}
                        draggable={false}
                        icon={false}
                        closeButton={false}
                        rtl
                        newestOnTop
                        closeOnClick
                        pauseOnFocusLoss
                        hideProgressBar
                    />

                    <BrowserRouter>
                        <QueryClientProvider client={queryClient}>
                            <App/>
                            { import.meta.env.VITE_NODE_ENV === 'development' && (
                                <ReactQueryDevtools initialIsOpen={false} /> )}
                        </QueryClientProvider>
                    </BrowserRouter>

                </ThemeProvider>
            </PersistGate>
        </Provider>


    </React.StrictMode>,
)
