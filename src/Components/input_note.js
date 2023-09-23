import { useState } from 'react';
import './input_note.css'
import { toast } from 'react-toastify';


function Input(props) {

    const [noteData, setNotedata] = useState({
        title: "",
        note: ""
    })
    let isActive = props.isActive;
    let setActive = props.setActive;
    let notes = props.notes;
    let setNotes = props.setNotes;

    function handle(event) {
        if (!isActive) {
            setActive(!isActive);
        }
    }
    function updateNote(event) {
        setNotedata(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }
    function reset() {
        setNotedata({
            title: "",
            note: ""
        })
    }
    function clickHandler() {
        let title = noteData.title;
        let desp = noteData.note;
        let id = -1;
        if (title.length === 0 && desp.length === 0) {
            toast.warn("Can't Insert note without title or description")
            return;
        }
        if (title.length === 0) {
            toast.warn("Enter some title!!");
            return;
        }
        if (notes.length !== 0) {
            id = notes[0].id + 1;
            console.log(id)
        }
        else {
            id = 0;
        }
        const temp = {
            id: id,
            title: title,
            desp: desp
        };
        let arr = [temp, ...notes];
        reset();
        setNotes(arr);
    }
    // console.log(notes)
    return (
        <>
            <div className="main">
                <textarea className={isActive ? 'show style-title' : 'not-show'} placeholder='Title' name="title" onChange={updateNote} value={noteData.title} />
                <textarea className={isActive ? 'input-note set-border' : 'input-note'} onClick={handle} placeholder='Note' name="note" onChange={updateNote} value={noteData.note} />
            </div>
            <button onClick={clickHandler} className='button'>Add Note</button>
        </>
    )
}
export default Input;