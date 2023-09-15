import { createContext, useContext, useState } from "react";

export const ButtonStateContext = createContext();

export const ButtonStateProvider = ({ children }) => {
  const [buttonStates, setButtonStates] = useState({});

  const newButtonState = {
  buttonText: "Add Fav",
  buttonValue: "ADD",
  buttonClass: "favButton",
}

  const updateButtonState = (dentistId, newButtonState) => {
    setButtonStates((prevButtonStates) => ({
      ...prevButtonStates,
      [dentistId]: newButtonState,
    }));
  };

  return (
    <ButtonStateContext.Provider
      value={{ buttonStates, updateButtonState }}
    >
      {children}
    </ButtonStateContext.Provider>
  );
};

export const useRecipeButton = () => useContext(ButtonStateContext)


/*  
  useEffect(() => {
    const initialStateButton = {
      
      buttonText: "Add Fav",
      buttonValue: "ADD",
      buttonClass: "favButton",
    };
    updateButtonState(dentist.id, initialStateButton);
  }, []);

  console.log(buttonStates)

e.preventDefault();
    const newButtonText =
      buttonStates[dentist.id]?.buttonText === "Add Fav"
        ? "Delete Fav"
        : "Add Fav";
    const newButtonValue =
      buttonStates[dentist.id]?.buttonValue === "ADD" ? "REMOVE" : "ADD";
    const newButtonClass =
      buttonStates[dentist.id]?.buttonClass === "favButton"
        ? "deleteFavButton"
        : "favButton";

    const newButtonState = {
      buttonText: newButtonText,
      buttonValue: newButtonValue,
      buttonClass: newButtonClass,
    };

    // Actualiza el estado del botón específico del dentista utilizando el contexto
    updateButtonState(dentist.id, newButtonState);
    console.log(newButtonState)

    dispatch({ type: newButtonValue, payload: dentist });
  };*/