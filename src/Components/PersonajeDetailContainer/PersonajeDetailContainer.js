import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import PersonajeDetailCard from '../PersonajeDetailCard/PersonajeDetailCard';

function PersonajeDetailContainer() {

  const [personaje, setPersonaje] = useState({});

  let { id } = useParams();
  let url = `https://rickandmortyapi.com/api/character/${id}`;
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPersonaje(data));        
  }, [id]);
  

  return (
    <div className='container'>        
        <PersonajeDetailCard personaje={personaje} />
    </div>
  )
}

export default PersonajeDetailContainer