import { createContext, useReducer, useContext, useState, useEffect } from "react";



export const ContextGlobal = createContext();

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
    case 'GET_DENTISTS':
      return {...state, dentists: action.payload}
    case 'ADD':
      setDentistInStorage(action.payload)
      return {...state, favs:[...state.favs, action.payload]};
    case 'REMOVE':
      console.log('borrar')
      const newDentists = deleteDentisInStorage(action.payload)        
      return {...state, data: newDentists };
    case 'THEME':
      return {...state, theme: action.payload}  
    default:
      throw new Error()
  }
}
const initialState = {
  dentists: [],
  favs: getDentistFromStorage(),
  theme: 'Light',
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState)

  /*Para el theme */
  //const [contextTheme, setContextTheme] = useState('Light');

  const changeTheme = () => {
    console.log(state.theme)
    dispatch({type:'THEME', payload: state.theme === 'Light' ? 'Dark': 'Light'})
  }

  /*Llamada a API*/
  //const[dentists, setDentists] = useState([])

  const getDentists = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    dispatch({type: 'GET_DENTISTS', payload: data})
  }

  useEffect(()=>{
  getDentists()},[])

  
  

  return (
    <ContextGlobal.Provider value={{state, changeTheme, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useRecipeStates = () => useContext(ContextGlobal)