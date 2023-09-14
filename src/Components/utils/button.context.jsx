import { createContext, useContext, useState } from "react";

export const ButtonStateContext = createContext();

export const ButtonStateProvider = ({ children }) => {
  const [buttonStates, setButtonStates] = useState({});

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