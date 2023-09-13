import { createContext, useReducer, useContext, useState, useEffect } from "react";

//export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo


  /*Para el theme */
  const [contextTheme, setContextTheme] = useState('Light');

  const changeTheme = () => {
    console.log(contextTheme)
    setContextTheme(contextTheme === 'Light' ? 'Dark': 'Light')
  }

  /*Llamada a API*/
  const[dentists, setDentists] = useState([])

  const getDentists = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setDentists(data)
  }

  useEffect(()=>{
  getDentists()},[])

  
  

  return (
    <ContextGlobal.Provider value={{dentists, contextTheme, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useRecipeStates = () => useContext(ContextGlobal)