import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Provider} from "react-redux";
import {HashRouter, Route, Routes} from "react-router-dom";
import store from "./store/index.js";
import './index.css'
import RegistrationForm from "./components/RegistrationForm/index.jsx";
import LoginForm from "./components/LoginForm/index.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path={'/'} element={<App/>}>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'*'} element={<NotFound/>}/>
            <Route path={'/registration'} element={<RegistrationForm/>}/>
            <Route path={'/login'} element={<LoginForm/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
