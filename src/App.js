import { useState } from 'react';
import './App.css';
import Input from './Components/input_note';
import Cards from './Components/Cards';

function App() {
  const [isActive, setActive] = useState(false);

  let [notes, setNotes] = useState([]);

  function handleApp(event) {
    if (event.target.name === "title" || event.target.name === "note") {
      return;
    }
    else {
      if (isActive) {
        setActive(!isActive);
      }
    }
  }
  function handleDelete(id) {
    const newTasks = notes.filter(note => note.id !== id);
    setNotes(newTasks);

    // Update local storage after deleting the note
    localStorage.setItem('notes', JSON.stringify(newTasks));
  }

  return (
    <div className="App" onClick={handleApp}>
      <h1>Note Making Application</h1>
      <div className='input'>
        <Input isActive={isActive} setActive={setActive} notes={notes} setNotes={setNotes} />
      </div>
      <Cards notes={notes} removeNote={handleDelete} />

      {/* <Routes>
        <Route path="/" element={App.js} />
        <Route path='/full-screen' element={<Maximize />} />
      </Routes> */}
    </div>
  );
}

export default App;
