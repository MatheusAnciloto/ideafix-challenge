import axios from 'axios';
import { useState, useEffect } from 'react';

import CardNotes from './components/CardNotes';
import FormNote from './components/FormNote';

import './styles/App.css';

function App() {
  const [notas, setNotas] = useState([]);

  async function buscarNotas() {
    const { data } = await axios.get('http://localhost:3333/notes');

    console.log(data);
    setNotas(data);
  }

  useEffect(() => { 
    buscarNotas();
  }, []);

  return (
    <main className="container">
      <div>
        <h1>Bloco de notas</h1>

        <FormNote updateNotes={buscarNotas} />
      </div>
      
      <hr className="vertical-line" />

      <div className="card-notes">
        <h1>Suas notas</h1>

        <CardNotes 
          notes={notas}
          updateNotes={buscarNotas}
        />

      </div>
    </main>
  );
}

export default App;
