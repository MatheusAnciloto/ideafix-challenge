import axios from 'axios';

import '../styles/CardNotes.css';

export default function CardNotes({ notes, updateNotes }){
  
  async function deleteNote(id){
    try {
      await axios.delete(`http://localhost:3333/notes/${id}`);

      updateNotes();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="notes">
      {notes.map(note => (
        <div key={note.id}>
          <button type="button" onClick={() => deleteNote(note.id)}>&times;</button>

            <section>
              <h2>{note.title}</h2>
              <hr />

              <p>{note.description}</p>
            </section>
        </div>
      ))}
    </div>
  );
}