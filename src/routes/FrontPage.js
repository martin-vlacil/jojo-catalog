import React, {useState, useEffect} from "react"
import CardList from "../components/CardList"
import Details from "../components/Details"

export default function FrontPage() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(response => response.json())
            .then(data => setPokemonList(data.results))
            .catch(error => console.error("Error fetching characters", error))
    }, [])

    const handleCardClick = pokemon => {
        setSelectedPokemon(pokemon)
    }

    return (
        <div className = "root">
            <h1>Characters</h1>
            <CardList pokemonList = {pokemonList} onCardClick = {handleCardClick} />
            <Details pokemon = {selectedPokemon} />
        </div>
    )
}