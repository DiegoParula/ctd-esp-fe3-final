import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useRecipeStates } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//obtengo los dentistas del storage
/*
const getDentistFromStorage = () =>{
  const localData = localStorage.getItem("dentists")
  return localData ? JSON.parse(localData) : []
}*/



const Favs = () => {

  const {state} = useRecipeStates()
  const {favs} = state
//  const [dentists, setDentists] = useState(getDentistFromStorage()) 
  

 /* useEffect(()=>{
    setDentists(getDentistFromStorage()) },[])*/
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.length ? favs.map(dentist =>(<Card key={dentist.id} dentist={dentist}/> )): null}
      </div>
    </>
  );
};

export default Favs;
