
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
import { useRecipeStates } from "./Components/utils/global.context";

function App() {
  const {contextTheme} = useRecipeStates()
  return (
      <div className="App" id={contextTheme}>
          <Navbar/>
          <Outlet />
          <Footer/>
      </div>
  );
}

export default App;
