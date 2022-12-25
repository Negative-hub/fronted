import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import {Routes, Route, Outlet, useNavigate, useLocation} from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/index.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import CreateTaskForm from "./components/CreateTaskForm/index.jsx";

function App() {
  const user = useSelector(state => state.auth.user)
  const navigate = useNavigate()
  const link = useLocation()

  useEffect(() => {
    if (user && paths.includes(link.pathname)) {
      navigate('/')
    }
  }, [user, link])

  const paths = ['/login', '/reg']

  return (
      <div className="App">
        <Navbar/>
        {!user && <Outlet/>}
        {user &&
            <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/create'} element={<CreateTaskForm/>}/>
              <Route path={'/tasks'} element={<Home/>}/>
              <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        }
      </div>
  )
}

export default App