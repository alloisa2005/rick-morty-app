import React from "react";
import { Link } from "react-router-dom";
import "./PersonajesCard.css";

function PersonajesCard({ personaje }) {
  return (
    <Link to={`/personaje/${personaje.id}`} className="a_per">
    <div className="personaje_card card mb-4">
      <img
        className="card-img-top w-100"
        src={personaje.image}
        alt={personaje.name}
      />
      <div className="card-body">
        <p className="fs-4">{personaje.name}</p>
        <p>{personaje.species} - {personaje.origin.name}</p>
      </div>
    </div>
    </Link>
  );
}

export default PersonajesCard;
