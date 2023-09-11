import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import { useRecipeStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {dentists} = useRecipeStates()
  /*const[dentists, setDentists] = useState([])

  const getDentists = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setDentists(data)
  }

  useEffect(()=>{
  getDentists()},[])
*/
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
          {dentists.length ? dentists.map(dentist =>(<Card key={dentist.id} id={dentist.id} name={dentist.name} username={dentist.username}/> )): null}
      </div>
    </main>
  )
}

export default Home