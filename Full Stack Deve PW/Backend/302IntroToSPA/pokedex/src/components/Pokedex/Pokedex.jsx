import {  useState } from "react"
import PokemonList from "../PokemonList/PokemonList"
import Search from "../Search/Search"

//Css Import
import './Pokedex.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails"

function Pokerdex(){
    const [ searchTerm , setSearchTerm] = useState('')
    return(
        <div className="pokedex-wrapper">
           <Search updateSearchTerm= { setSearchTerm}/>
           {(!searchTerm ) ? <PokemonList/> : <PokemonDetails key={searchTerm} pokemonName={ searchTerm}/>}
        </div>
    )
}
export default Pokerdex
