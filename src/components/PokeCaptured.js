import React from 'react'
import PokeEncounter from './PokeEncounter';


export default function PokeCaptured(props) {
    return (
        <div className="captured">
          <h3>Captured {props.captured.length} / 6</h3>
          <ul className="capture-list">
              {props.captured.map(poke => (
                <li>
                    <img src={poke.pic}/>
                    <p>{poke.name}</p>
                </li>
                ))}
          </ul>
        </div>
    )
}