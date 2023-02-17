import React, { useEffect, useState } from "react"
import axios from "axios"
import {BASE_URL} from "../../constants/url"

function PokedexPage(){
const [pokemons, setPokemons] = useState({});

useEffect(()=>{
  fetchPokemon();
}, []);

const fetchPokeList = async () => {
  try{
    const response = await axios.get(BASE_URL)
    setPokeList (response.data.results)
    }catch(error){
      console.log("Erro ao buscar lista de pokemons")
      console.log(error.response)
    }
};

return(
    <p>Pokedex Page!</p>
  )
  
}
export default PokedexPage;
