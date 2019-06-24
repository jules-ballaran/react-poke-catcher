import React from 'react'

const style = {
    backgroundColor: '#ffcd04',
    padding: '8px',
    margin: '8px',
    borderRadius: '18px',
    textAlign: 'center',
    boxShadow: '5px 5px 7px 0px rgba(0,0,0,0.75)',
    height: '18px'
}

export default function PokeMessage () {
    return (
        <div style={style}>
            <span>Click "Explore" to start searching for Pokemon</span>
        </div>
    )
}