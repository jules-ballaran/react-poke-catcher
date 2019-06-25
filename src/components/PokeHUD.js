import React from 'react'

import PokeEncounter from './PokeEncounter'
import PokeCaptured from './PokeCaptured'

const style = {
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '8px',
}

export default function PokeHUD (props) {
    return (
        <div style={style}>
            <PokeEncounter pokemon={props.pokemon} handleCapture={props.handleCapture} capture={props.capture}/>
            <PokeCaptured  captured={props.captured}/>
        </div>
    )
}