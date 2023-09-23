import { useState } from 'react';
import Card from './Card';
import './Cards.css'
import { MdClose } from 'react-icons/md'
import { GrDocumentText } from 'react-icons/gr'

function Cards(props) {
    const [show, setShow] = useState(false);
    const [index, setIndex] = useState(0);
    let notes = props.notes;

    if (notes.length === 0) {
        return (
            <div className='noNote-message'>
                <GrDocumentText className='no-icon' />
                <div className='no-note'>
                    Notes You add appear here
                </div>
            </div>
        )
    }
    else {
        let removeNote = props.removeNote;
        function handleClose() {
            setShow(false);
        }
        return (
            <>
                <div className='cards'>
                    {
                        notes.map(note => {
                            return <Card note={note} key={note.id} removeNote={removeNote} setShow={setShow} setIndex={setIndex} />
                        })
                    }
                </div>
                {show &&
                    <div className='maxi'>
                        <div className='content'>
                            {/* {notes.length - index - 1}
                            {console.log(notes[notes.length - index - 1])} */}
                            <h1>{notes[notes.length - index - 1].title}</h1>
                            <p>{notes[notes.length - index - 1].desp}</p>
                        </div>
                        <MdClose className='close' onClick={handleClose} />

                    </div>
                }
            </>
        )
    }

}
export default Cards;