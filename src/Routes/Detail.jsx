import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecipeStates } from "../Components/utils/global.context";

const Detail = () => {
  const { state } = useRecipeStates();
  //const {name, email, phone, website, id} = state.dentists
  const [dentist, setDentist] = useState([]);
  const params = useParams();

  const getDentist = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const data = await res.json();
    setDentist(data);
  };

  useEffect(() => {
    getDentist();
  }, []);

  return (
    <div className="detailContent">
      <div className="detail" id={state.theme}>
        <h1>{dentist.name} </h1>
        <p>Email: {dentist.email}</p>
        <p>Phone: {dentist.phone}</p>
        <p>Website: {dentist.website}</p>
      </div>
    </div>
  );
};

export default Detail;
