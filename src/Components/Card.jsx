import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStates } from "./utils/global.context";
import { useReducer, useState } from "react";

//obtengo los dentistas del storage
const getDentistFromStorage = () =>{
  const localData = localStorage.getItem("dentists")
  return localData ? JSON.parse(localData) : []
}
//almaceno el dentista en el storage
const setDentistInStorage = (dentist) =>{
  const localData = getDentistFromStorage()
localData.push(dentist)
localStorage.setItem("dentists", JSON.stringify(localData))
}


const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      setDentistInStorage(action.payload)
      return {...state, data:[...state.data, action.payload]};
    case 'REMOVE':
      console.log('borrar')
      const newDentists = state.data.filter((dentist) => dentist.id !== action.payload);        
      return {...state, data: newDentists };
    default:
      throw new Error()
}



}

const Card = ({ name, username, id }) => {

  //const {dispatch} = useRecipeStates()

  const [state, dispatch] = useReducer(reducer, {data: getDentistFromStorage()})

  const [button, setButton] = useState('ADD') 
  
  const buttonText = () => {
    return button === 'ADD' ? 'Add fav' : 'Delete fav';
  };
/*
  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.preventDefault()   
    console.log("test")
    const actionType = state.action.type === 'ADD' ? 'REMOVE' : 'ADD';
    dispatch({type:actionType, payload: id})
    //dispatch({type: state.action.type === 'ADD' ? 'ADD' : 'REMOVE', payload: id})

  }
*/ 
  

  const addFav = (e)=>{
    // Aqui iria la logica para agregar la Card en el localStorage
    e.preventDefault()   
    console.log(button)
    
    const actionType = button === 'ADD' ? 'ADD' : 'REMOVE' ;
    dispatch({type:actionType, payload: id})
    button === 'ADD' ? setButton('REMOVE') : setButton('ADD');
    //dispatch({type: 'ADD', payload: name, username})

  }

  return (
    <Link to={'/details/' + id}>
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>Id: {id}</p>
        <h2>Nombre: {name}</h2>
        <h2>Apellido: {username}</h2>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{buttonText()}</button>
    </div>
    </Link>
  );
};

export default Card;
