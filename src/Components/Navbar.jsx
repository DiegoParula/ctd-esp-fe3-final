import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipeStates } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, changeTheme } = useRecipeStates()



   return (
    <nav >
      <div>
        
      </div>
      <div >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link className= 'linkButton' to='/'>
       <span className='hover-underline-animation'>Home</span> 
      </Link>
      <Link className= 'linkButton' to='/favs'>
        <span className='hover-underline-animation'>Favs</span>
      </Link>
      <Link className= 'linkButton' to='/contact'>
        <span className='hover-underline-animation'>Contact</span>
      </Link>
      <button className="themeButton" onClick={changeTheme}>
      {state.theme === 'Light' ? 'Dark ' : 'Light'}
      </button>
      </div>
    </nav>
  )
}

export default Navbar