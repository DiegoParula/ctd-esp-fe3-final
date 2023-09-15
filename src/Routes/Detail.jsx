import React, { useEffect, useState } from 'react'
import { useAsyncValue, useParams } from 'react-router-dom'
import { useRecipeStates } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {state} = useRecipeStates()
  //const {name, email, phone, website, id} = state.dentists
  const [dentist, setDentist] = useState([])
  const params = useParams()

  const getDentist = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const data = await res.json()
    setDentist(data)
    //console.log(data)
  }

  useEffect(()=>{
    getDentist()
  },[])
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className='detailContent'>
    <div className='detail' id={state.theme}>
      <h1>{dentist.name} </h1>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
      </div>
    </div>
  )
}


export default Detail