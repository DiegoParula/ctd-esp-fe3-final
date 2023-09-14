
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useRecipeStates } from "./Components/utils/global.context";
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import Favs from './Routes/Favs.jsx'
import Detail from './Routes/Detail.jsx'
import Contact from './Routes/Contact.jsx'
import Error from './Components/Error.jsx'

function App() {
  const {state} = useRecipeStates()
  return (
      <div className="App" id={state.theme}>
          <Navbar/>
          <Routes>
        
            <Route path='/' element={<Home />}/>
            <Route path='/favs' element={<Favs />}/>
            <Route path='/details/:id' element={<Detail />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='*' element={<Error />}/>
        
          </Routes>
      
          
          <Footer/>
      </div>
  );
}

export default App;
//<Outlet />
//<Route path='/' element={<App />}>
//</Route>