import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store/index.js";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(() => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
  })
}