import {Card} from "./Card";
import "./CardList.css"
import React, {useState, useEffect} from "react"

export default function CardList({pokemonList, onCardClick}) {
    const [detailedPokemonList, setDetailedPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemonDetails = async () => {
        const promises = pokemonList.map(pokemon => {
            return fetch(pokemon.url)
            .then(response => {
                if (response.ok) {
                return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .catch(error => {
                console.error("Error fetching Pokemon details:", error);
            });
        });

        try {
            const data = await Promise.all(promises);
            setDetailedPokemonList(data);
        } catch (error) {
            console.error("Error fetching Pokemon details:", error);
        }
        };

        fetchPokemonDetails();
    }, [pokemonList]);

    return (
        <div className="card-list">
        {detailedPokemonList.map(pokemon => (
            <Card key={pokemon.id} pokemon = {pokemon} onClick = {onCardClick} />
        ))}
        </div>
    );
}