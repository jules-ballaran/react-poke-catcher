import React from 'react'

const captured = {
    height: 'calc(100vh - 150px)',
    flex: '1',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    boxShadow: '5px 5px 7px 0px rgba(0,0,0,0.75)',
    margin: '8px',
}

const captureList = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxHeight: '100%',
}

const list = {
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
}

const h3 = {
    color: 'white',
    backgroundColor: '#EF5350',
    padding: '8px',
    margin: '0',
    textAlign: 'center', 
    textTransform: 'uppercase'
}

export default function PokeCaptured(props) {
    return (
        <div style={captured}>
          <h3 style={h3}>Captured {props.captured.length} / 6</h3>
          <ul style={captureList}>
              {props.captured.map((poke, i)=> (
                <li style={list} key={`${poke.name}${i}`}>
                    <img src={poke.pic} alt=''/>
                    <p>{poke.name}</p>
                </li>
                ))}
          </ul>
        </div>
    )
}