import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStates } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {contextTheme, setContextTheme } = useRecipeStates()

  const changeTheme = () => {
    console.log(contextTheme)
    setContextTheme(contextTheme === 'Light' ? 'Dark': 'Light')
  }

   return (
    <nav >
      <div >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/'>Home</Link>
      <Link to='/favs'>Favs</Link>
      <Link to='/contact'>Contact</Link>
      <button className="themeButton" onClick={changeTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar