import "./Details.css"
import { capitalizeFirstLetter } from "./Card"

export default function Details({pokemon}) {
    if(!pokemon) {
        return <div className = "details">Select a Pokémon.</div>
    }

    return(
        <div className = "details">
            <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            <div className = "info-container">
                <div className = "image-container">
                    <img src = {pokemon.sprites.front_default} alt = {pokemon.name} />
                </div>
                <div className = "text-container">
                    <p><strong>Type(s): </strong>{pokemon.types.map(type => type.type.name).join(", ")}</p>
                    <p><strong>Stats: </strong></p>
                    <li className = "stat-item"><strong>HP: </strong>{pokemon.stats[0].base_stat}</li>
                    <li className = "stat-item"><strong>Attack: </strong>{pokemon.stats[1].base_stat}</li>
                    <li className = "stat-item"><strong>Defense: </strong>{pokemon.stats[2].base_stat}</li>
                    <li className = "stat-item"><strong>Special attack: </strong>{pokemon.stats[3].base_stat}</li>
                    <li className = "stat-item"><strong>Special defense: </strong>{pokemon.stats[4].base_stat}</li>
                    <li className = "stat-item"><strong>Speed: </strong>{pokemon.stats[5].base_stat}</li>
                    <p><strong>Abilities: </strong>{pokemon.abilities.map(ability => ability.ability.name).join(", ")}</p>
                    <p><strong>Height: </strong>{pokemon.height}</p>
                    <p><strong>Weight: </strong>{pokemon.weight}</p>
                </div>
            </div>
        </div>
    )
}