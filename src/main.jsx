import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Favs from './Routes/Favs.jsx'
import Detail from './Routes/Detail.jsx'
import Contact from './Routes/Contact.jsx'
import Error from './Components/Error.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/home' element={<Home />}/>
          <Route path='/favs' element={<Favs />}/>
          <Route path='/details/:id' element={<Detail />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<Error />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
