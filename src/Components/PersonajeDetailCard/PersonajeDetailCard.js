import React from 'react'

function PersonajeDetailCard({ personaje }) {
  return (
    <div className='my-2'>
        <h2>{personaje.name}</h2>
        <img src={personaje.image} alt={personaje.name} />
    </div>
  )
}

export default PersonajeDetailCard