import axios from 'axios';
import { useState } from 'react';

import '../styles/FormNote.css';

export default function FormNote({ updateNotes }){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  async function createNote(e){
    e.preventDefault();

    try {
      await axios.post('http://localhost:3333/notes/create', {
        title,
        description,
      });

      setTitle('');
      setDescription('');
      updateNotes();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={createNote}>
      <input type="text" placeholder="Assunto" value={title} onChange={e => setTitle(e.target.value)} required />
      <textarea type="text" placeholder="Texto" value={description} onChange={e => setDescription(e.target.value)} required />

      <button type="submit">CRIAR NOTA</button>
    </form>
  );
}