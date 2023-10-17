import React, { useContext } from "react";
import { PokemonContext } from "./PokemonContext";
import "./Page.css";
import { Link } from "react-router-dom";

function Page2() {
  const pokemonNames = useContext(PokemonContext);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div className="page">
          <h1>Kelompok 23</h1>
          <h2>Page 2</h2>
          <ul>
            {pokemonNames.slice(11, 20).map((name, index) => (
              <li key={index}>{name}</li>
            ))}
          </ul>
          <Link to="/" className="custom-button">
            Previous Page
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Page2;
