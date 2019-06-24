import React from 'react'

import PokeEncounter from './PokeEncounter'
import PokeCaptured from './PokeCaptured'

export default function PokeHUD (props) {
    return (
        <div className='pokemon-hud'>
            <PokeEncounter pokemon={props.pokemon} handleCapture={props.handleCapture} capture={props.capture}/>
            <PokeCaptured  captured={props.captured}/>
        </div>
    )
}