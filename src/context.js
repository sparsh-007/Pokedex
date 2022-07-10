//file to create a warehouse

import React, { useContext, useState,useEffect} from "react";
import axios from "axios";

const Appcontext = React.createContext();
const Appprovider = ({ children }) => {
  const [pokedata, setPokedata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon`);
const[nextUrl,setNextUrl]=useState();
const[prevUrl,setPrevUrl]=useState();
 
const pokefun=async()=>{
    setLoading(true);
    const res=await axios.get(url);
    //console.log(res.data);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemonData(res.data.results);
    // console.log(res.data.results);
    setLoading(false);



}
const getPokemonData=async(res)=>{
    res.map(async(item)=>{
        const result=await axios.get(item.url);
        // console.log(result.data);
        setPokedata(state=>{
            state=[...state,result.data]
            state.sort((a, b) => (a.id > b.id ? 1 : -1));
            return state;
        });
        // setPokedata(result.data);
        
    })
}
// console.log(pokedata);
useEffect(()=>{
  pokefun();
},[url])

  return <Appcontext.Provider value={{pokedata,loading,nextUrl,prevUrl,setUrl,setPokedata}}>{children}</Appcontext.Provider>;
};
//global hook
const useGlobalContext = () => {
  return useContext(Appcontext);
};

export { Appcontext, Appprovider, useGlobalContext };
