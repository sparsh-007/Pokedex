import React,{useState} from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import "../components/style.css";
import { useGlobalContext } from "../context";

function Main() {
    const [pokeDex,setPokeDex]=useState();
    const {nextUrl}=useGlobalContext();
    const {prevUrl}=useGlobalContext();
    const {setUrl}=useGlobalContext();
    const {setPokedata}=useGlobalContext();
  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card infoPokemon={(poke) => setPokeDex(poke)} />
          <div className="btn-group">
            <button
              onClick={() => {
                setPokedata([]);
                setUrl( prevUrl );
              }}
            >
              Previous
            </button>
            <button
              onClick={() => {
                 setPokedata([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          </div>
        </div>
        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
    </>
  );
}

export default Main;
