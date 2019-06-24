import React from 'react'

import PokeButton from './PokeButton'
export default function PokeEncounter(props) {
    return (
        <div className='encounter'>
            <h3>Encounter</h3>
            <div className='details'>
                {console.log(props.capture)}
                {props.capture ?
                <React.Fragment>
                <fieldset>
                    <legend>You Found A...</legend>
                    <div className='found'>
                        <h3>{props.pokemon.name}</h3>
                        <img src={props.pokemon.pic} alt=''/>
                        <PokeButton handleExplore={props.handleCapture}>Explore</PokeButton>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Details</legend>
                    {console.log(props.pokemon.stats)}
                    <ul>
                        <li>speed: {props.pokemon.stats[0].base_stat}</li>
                        <li>special-defense: {props.pokemon.stats[1].base_stat}</li>
                        <li>special-attack: {props.pokemon.stats[2].base_stat}</li>
                        <li>defense: {props.pokemon.stats[3].base_stat}</li>
                        <li>attack: {props.pokemon.stats[4].base_stat}</li>
                        <li>hp: {props.pokemon.stats[5].base_stat}</li>
                    </ul>
                </fieldset>
                </React.Fragment>
                : <p>Captured poliwhirl, explore to find more pokemon</p>
                }
            </div>
        </div>
    )
}