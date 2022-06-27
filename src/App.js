
import Navbar from './Components/Navbar/Navbar';
import { Routes, Route } from 'react-router';
import Personajes from './Components/Personajes/Personajes';
import PersonajeDetailContainer from './Components/PersonajeDetailContainer/PersonajeDetailContainer';

function App() {
  return (
    <div className='bg-light'>      
      <Navbar />   

      <Routes>
        <Route path="/" element={ <Personajes />} />
        <Route path="/personaje/:id" element={ <PersonajeDetailContainer />} />
      </Routes>   
    </div>
    
    
  );
}

export default App; 
