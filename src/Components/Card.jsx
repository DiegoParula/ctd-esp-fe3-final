import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStates } from "./utils/global.context";
import { useReducer, useState, useEffect } from "react";



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

//almaceno el dentista en el storage
const deleteDentisInStorage = (dentist) =>{
  const localData = getDentistFromStorage()
  console.log(localData)
  const newDentists = localData.filter((item) => item.id !== dentist.id); 
  console.log(newDentists)
  localStorage.setItem("dentists", JSON.stringify(newDentists))
  
  return newDentists 
  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      setDentistInStorage(action.payload)
      return {...state, data:[...state.data, action.payload]};
    case 'REMOVE':
      console.log('borrar')
      const newDentists = deleteDentisInStorage(action.payload)        
      return {...state, data: newDentists };
    default:
      throw new Error()
}



}

const Card = ({ name, username, id }) => {

  const {contextTheme} = useRecipeStates()
  //const {dispatch} = useRecipeStates()

  const [state, dispatch] = useReducer(reducer, {data: getDentistFromStorage()})

  //const [button, setButton] = useState('ADD') 
  
  const initialStateButton = {
    buttonText: "Add Fav",
    buttonValue: "ADD",
    buttonClass: "favButton",
  };

  //pongo el estado del boton dependiendo si esta en el storage o no 
  //para poder manejar el valor y el texto a mostrar
  const [buttonState, setButtonState] = useState(
    localStorage.getItem(`buttonState-${id}`)
      ? JSON.parse(localStorage.getItem(`buttonState-${id}`))
      : initialStateButton
  );

  useEffect(() => {
    localStorage.setItem(`buttonState-${id}`, JSON.stringify(buttonState));
  }, [buttonState, id]);

  const addFav = (e) => {
    e.preventDefault();
    const newButtonText = buttonState.buttonText === "Add Fav" ? "Delete Fav" : "Add Fav";
    const newButtonValue = buttonState.buttonValue === "ADD" ? "REMOVE" : "ADD";
    const newButtonclass = buttonState.buttonClass === "favButton" ? "deleteFavButton" : "favButton"

    setButtonState({
      buttonText: newButtonText,
      buttonValue: newButtonValue,
      buttonClass: newButtonclass
  })

  dispatch({type:buttonState.buttonValue, payload: {id: id, name: name, username: username}})
  }
  return (
    <Link to={'/details/' + id}>
    <div className="card" id={contextTheme}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>Id: {id}</p>
        <img className='card__avatar' src="/images/doctor.jpg" alt="" />
        <h2>{name}</h2>
        <h3>{username}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className={buttonState.buttonClass}>{buttonState.buttonText}</button>
    </div>
    </Link>
  );
};

export default Card;
