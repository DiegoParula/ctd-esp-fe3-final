import { createContext, useReducer, useContext, useEffect } from "react";

export const ContextGlobal = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return { ...state, dentists: action.payload };
    case "GET_FAVS":
      return { ...state, favs: action.payload };
    case "ADD":
      setDentistInStorage(action.payload);
      console.log(state.favs);
      return { ...state, favs: [...state.favs, action.payload] };
    case "REMOVE":
      const newDentists = deleteDentisInStorage(action.payload);
      return { ...state, favs: newDentists };
    case "THEME":
      return { ...state, theme: action.payload };
    default:
      throw new Error();
  }
};

const localFavs = JSON.parse(localStorage.getItem("favs"));
const initialFavState = localFavs ? localFavs : [];

//almaceno el dentista en el storage
const setDentistInStorage = (dentist) => {
  try {
    const localData = JSON.parse(localStorage.getItem("favs")) || [];
    localData.push(dentist);
    localStorage.setItem("favs", JSON.stringify(localData));
  } catch (error) {
    console.error("Error al guardar en localStorage:", error);
  }
};

//elimino el dentista en el storage
const deleteDentisInStorage = (dentist) => {
  const localData = JSON.parse(localStorage.getItem("favs"));
  const newDentists = localData.filter((item) => item.id !== dentist.id);
  localStorage.setItem("favs", JSON.stringify(newDentists));

  return newDentists;
};

const initialState = {
  dentists: [],
  favs: initialFavState,
  theme: "Light",
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  /*Para el theme */

  const changeTheme = () => {
    dispatch({
      type: "THEME",
      payload: state.theme === "Light" ? "Dark" : "Light",
    });
  };

  /*Llamada a API*/

  const getDentists = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    dispatch({ type: "GET_DENTISTS", payload: data });
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, changeTheme, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useRecipeStates = () => useContext(ContextGlobal);
