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
       
        <img className="card__avatar" src="/images/doctor.jpg" alt="" />
        <h2>{dentist.name}</h2>
        <h3>{dentist.username}</h3>
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
