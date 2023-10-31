import "./assets/styles/global.css";
import "react-toastify/dist/ReactToastify.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {persistor, store} from '@store/store';
import {PersistGate} from "redux-persist/integration/react";
import { ThemeProvider } from '@mui/material/styles';
import theme from '@config/theme'
import {CssBaseline} from "@mui/material";
import {ToastContainer, Zoom} from "react-toastify";
import {setupInterceptorsTo} from "@config/configAxios";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import App from './App'

setupInterceptorsTo(axios);

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
                      <App />
                  </BrowserRouter>
              </ThemeProvider>
          </PersistGate>
      </Provider>


  </React.StrictMode>,
)
