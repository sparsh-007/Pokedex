import React from "react";
import "../components/style.css";
import { useGlobalContext } from "../context";

function Card({infoPokemon}) {
  const { pokedata } = useGlobalContext();
  const {loading} =useGlobalContext();
  // console.log(pokemon)
  return (
    <>
      {loading ? (
        <h1> is loading...</h1>
      ) : (
        pokedata.map((item) => {
          return (
            <>
              <div className="card" key={item.id} onClick={()=>infoPokemon(item)}>
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>{item.name}</h2>
              </div>
            </>
          );
        })
      )}
    </>
  );
}

export default Card;
