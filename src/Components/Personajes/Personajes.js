import React, {useState, useEffect} from 'react'
import Pagination from '../Pagination/Pagination';
import PersonajesCard from '../PersonajesCard/PersonajesCard';
import './Personajes.css';

function Personajes() {

  let initialUrl = 'https://rickandmortyapi.com/api/character/';

  const [personajes, setPersonajes] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getData(initialUrl);
  }, []);

  function getData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      setPersonajes(data.results);
      setInfo(data.info);      
    });
  }

  function nextPage(){    
    getData(info.next);
  }

  function prevPage(){
    getData(info.prev);
  }

  return (
    <div className='container'>
        <Pagination info={info} prevPage={prevPage} nextPage={nextPage} />                

        <div className='mt-4 container personajes_container'>
          {
            personajes.map( (p,index) => (
              <PersonajesCard key={index} personaje={p} />
            ))
          }
        </div>

        <Pagination info={info} prevPage={prevPage} nextPage={nextPage} />
    </div>
  )
}

export default Personajes