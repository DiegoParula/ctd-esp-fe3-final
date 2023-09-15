import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStates } from "./utils/global.context";


const Card = ({ dentist }) => {
  const { state, dispatch } = useRecipeStates();
  const { favs } = state;

  const isFavorite = favs.some((fav) => fav.id === dentist.id);
  console.log(state.favs);

  const addFav = (e) => {
    e.preventDefault();

    if (isFavorite) {
      dispatch({ type: "REMOVE", payload: dentist });
    } else {
      dispatch({ type: "ADD", payload: dentist });
    }
  };
  return (
    <div className="card" id={state.theme}>
      <Link className="linkCard" to={"/details/" + dentist.id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <p>Id: {dentist.id}</p>
        <img className="card__avatar" src="/images/doctor.jpg" alt="" />
        <h2>{dentist.name}</h2>
        <h3>{dentist.username}</h3>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>

      <button
        onClick={addFav}
        className={isFavorite ? "deleteFavButton" : "favButton"}
      >
        {isFavorite ? "Delete Fav" : "Add Fav"}
      </button>
    </div>
  );
};

export default Card;
