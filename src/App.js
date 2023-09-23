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
    // console.log(id)
    const newtasks = notes.filter(note => note.id !== id);
    setNotes(newtasks);
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
