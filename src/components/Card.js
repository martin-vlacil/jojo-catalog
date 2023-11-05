import "./Card.css"

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function Card({ pokemon, onClick }) {
    return (
        <div className = "card" onClick = {() => onClick(pokemon)}>
            <img src = {pokemon.sprites.front_default} alt = {capitalizeFirstLetter(pokemon.name)}></img>
            <h3>{capitalizeFirstLetter(pokemon.name)}</h3>
        </div>
    )
}