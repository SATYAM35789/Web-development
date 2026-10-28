import { Routes , Route} from "react-router-dom"
import Pokerdex from "../components/Pokedex/Pokedex"
import PokemonDetails from "../components/PokemonDetails/PokemonDetails"
function CustomRoutes(){
    return(
       <Routes>
            <Route path= "/"element={<Pokerdex/>}/>
            <Route path ='/pokemon/:id' element = {<PokemonDetails/>} />
       </Routes>
    )
}
export default CustomRoutes