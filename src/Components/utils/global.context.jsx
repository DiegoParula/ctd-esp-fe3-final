import { createContext, useReducer, useContext, useState, useEffect } from "react";



export const ContextGlobal = createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DENTISTS':
      return {...state, dentists: action.payload}
    case 'GET_FAVS':
        console.log(favs)
        return { ...state, favs: action.payload };  
    case 'ADD':
      setDentistInStorage(action.payload)
      console.log(state.favs)
      return {...state, favs:[...state.favs, action.payload]};
    case 'REMOVE':
      console.log('borrar')
      const newDentists = deleteDentisInStorage(action.payload)        
      return {...state, favs: newDentists};
    case 'THEME':
      return {...state, theme: action.payload}  
    default:
      throw new Error()
  }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

//almaceno el dentista en el storage
const setDentistInStorage = (dentist) =>{
  try {
    const localData = JSON.parse(localStorage.getItem("favs")) || [];
    localData.push(dentist);
    localStorage.setItem("favs", JSON.stringify(localData));
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
  }

//almaceno el dentista en el storage
const deleteDentisInStorage = (dentist) =>{
  const localData = JSON.parse(localStorage.getItem("favs"))
  console.log(localData)
  const newDentists = localData.filter((item) => item.id !== dentist.id); 
  console.log(newDentists)
  localStorage.setItem("favs", JSON.stringify(newDentists))
  
  return newDentists 
  
}






const initialState = {
  dentists: [],
  favs: initialFavState,
  theme: 'Light',
  //isFavorite: false
  
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

 

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    
   
    
  

  return (
    <ContextGlobal.Provider value={{state, changeTheme, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useRecipeStates = () => useContext(ContextGlobal)