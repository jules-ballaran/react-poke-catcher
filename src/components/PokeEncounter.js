import React from 'react'

import PokeButton from './PokeButton'

const h3 = {
    color: 'white',
    backgroundColor: '#EF5350',
    padding: '8px',
    margin: '0',
    textAlign: 'center', 
    textTransform: 'uppercase'
}

const details = {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    padding: '8px'
}

const fieldset = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

const found = {
    flex: '1 0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
}

export default function PokeEncounter(props) {
    return (
        <div style={{
            height: 'calc(100vh - 150px)',
            display: 'flex',
            flexDirection: 'column',
            flex: '1',
            boxSizing: 'border-box',
            backgroundColor: 'white',
            boxShadow: '5px 5px 7px 0px rgba(0,0,0,0.75)',
            margin: '8px'
        }}>
            <h3 style={h3}>Encounter</h3>
            <div style={details}>
                {props.capture === true?
                <React.Fragment>
                <fieldset style={fieldset}>
                    <legend>You Found A...</legend>
                    <div style={found}>
                        <h3 style={{
                            backgroundColor: 'inherit',
                            color: 'black'
                        }}>{props.pokemon.name}</h3>
                        <img style={{
                            width: '200px',
                            margin: '0 auto'}
                        }src={props.pokemon.pic} alt=''/>
                        <PokeButton handleExplore={props.handleCapture}>Explore</PokeButton>
                    </div>
                </fieldset>
                <fieldset style={fieldset}>
                    <legend>Details</legend>
                    {props.pokemon.stats && 
                    <ul>
                        <li>speed: {props.pokemon.stats[0].base_stat}</li>
                        <li>special-defense: {props.pokemon.stats[1].base_stat}</li>
                        <li>special-attack: {props.pokemon.stats[2].base_stat}</li>
                        <li>defense: {props.pokemon.stats[3].base_stat}</li>
                        <li>attack: {props.pokemon.stats[4].base_stat}</li>
                        <li>hp: {props.pokemon.stats[5].base_stat}</li>
                    </ul>
                    }
                </fieldset>
                </React.Fragment>
                : props.capture === false ? <p>Captured {props.pokemon.name}, explore to find more pokemon</p>
                : <p></p>
                }
            </div>
        </div>
    )
}