import Card from './Card';
import './Cards.css'
function Cards(props) {
    let notes = props.notes;
    if (notes.length === 0) {
        return (
            <>
                No entry to display
            </>
        )
    }
    else {
        let removeNote = props.removeNote;
        return (
            <div className='cards'>
                {
                    notes.map(note => {
                        return <Card note={note} key={note.id} removeNote={removeNote} />
                    })
                }
            </div>
        )
    }

}
export default Cards;