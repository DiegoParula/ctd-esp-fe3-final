import React from "react";
import Card from "../Components/Card";
import { useEffect, useState } from "react";
import { useRecipeStates } from "../Components/utils/global.context";

const Favs = () => {

  const {state} = useRecipeStates()
  const {favs} = state

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
       
        {favs.length ? favs.map(dentist =>(<Card key={dentist.id} dentist={dentist}/> )): null}
      </div>
    </>
  );
};

export default Favs;
