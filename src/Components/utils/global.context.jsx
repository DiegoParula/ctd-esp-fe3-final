import { createContext, useReducer, useContext, useState, useEffect } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const [contextTheme, setContextTheme] = useState('Light');


  const[dentists, setDentists] = useState([])

  const getDentists = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()
    setDentists(data)
  }

  useEffect(()=>{
  getDentists()},[])

  const changeTheme = () => {
    console.log(contextTheme)
    setContextTheme(contextTheme === 'Light' ? 'Dark': 'Light')
  }

  return (
    <ContextGlobal.Provider value={{dentists, contextTheme, changeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useRecipeStates = () => useContext(ContextGlobal)