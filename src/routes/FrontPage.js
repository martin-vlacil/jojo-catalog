import React, {useState, useEffect} from "react"
import CardList from "../components/CardList"
import Details from "../components/Details"
import "./FrontPage.css"

export default function FrontPage() {
    const [pokemonList, setPokemonList] = useState([])
    const [nextPageUrl, setNextPageUrl] = useState("")
    const [prevPageUrl, setPrevPageUrl] = useState("")
    const [selectedPokemon, setSelectedPokemon] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
            .then(response => response.json())
            .then(data => {
                setPokemonList(data.results)
                setNextPageUrl(data.next)
                setPrevPageUrl(data.previous)
            })
            .catch(error => console.error("Error fetching characters", error))
    }, [])

    const handleCardClick = pokemon => {
        setSelectedPokemon(pokemon)
    }

    const handleNextPage = () => {
        if(nextPageUrl) {
            fetch(nextPageUrl)
                .then(response => response.json())
                .then(data => {
                    setPokemonList(data.results)
                    setNextPageUrl(data.next)
                    setPrevPageUrl(data.previous)
                })
                .catch(error => console.error("Error handling next page", error))
        }
    }

    const handlePrevPage = () => {
        if(prevPageUrl) {
            fetch(prevPageUrl)
                .then(response => response.json())
                .then(data => {
                    setPokemonList(data.results)
                    setNextPageUrl(data.next)
                    setPrevPageUrl(data.previous)
                })
                .catch(error => console.error("Error handling previous page", error))
        }
    }

    return (
        <div className = "root">
            <h1>Pokémon</h1>
            <div className = "pagination">
                <button onClick = {handlePrevPage} disabled = {!prevPageUrl}>
                    Previous page
                </button>
                <button onClick = {handleNextPage} disabled = {!nextPageUrl}>
                    Next Page
                </button>
            </div>
            <CardList pokemonList = {pokemonList} onCardClick = {handleCardClick} />
            <Details pokemon = {selectedPokemon} />
        </div>
    )
}