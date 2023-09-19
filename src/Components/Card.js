import './Card.css'
import { AiFillDelete } from "react-icons/ai"
import { CiMaximize1 } from "react-icons/ci"

function Card(props) {
    let note = props.note;
    let title = note.title;
    let desp1 = note.desp;
    let id = note.id;
    let desp = "";
    let prev = 0;
    if (desp1.length > 100) {
        console.log("hi")
        for (let i = 0; i < 350; i++) {
            let slice = desp1.substr(prev, 50);
            if (i % 50 === 0) {
                prev = i + 2;
                desp += "\n";
                desp += slice;
            }
        }
        desp = desp.substr(0, 350) + "..."
    }
    let removeNote = props.removeNote;
    function handleMaximize() {
        alert("This feature will be added soon...");
    }
    return (
        <div className='card'>
            <AiFillDelete className='delete-icon' onClick={() => removeNote(id)} />
            <CiMaximize1 className='maximize' onClick={handleMaximize} />
            <div className='title'>{title}</div>
            <div className='desp'>{desp}</div>

        </div>
    )
}
export default Card;