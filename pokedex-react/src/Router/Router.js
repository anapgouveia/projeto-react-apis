import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonDetails from "../Pages/PokemonDetailPage/PokemonDetail"
import PokemonList from "../Pages/PokemonListPage/PokemonList"

const Router = () =>{
  return(
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<PokedexPage/>}/>
        <Route path="/details" element={<PokemonDetails/>}/>
        <Route path="/list" element={<PokemonList/>}/>        
      </Routes>
    
    </BrowserRouter>
  )
}

export default Router;