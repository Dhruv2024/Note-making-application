import './Card.css'
import { AiFillDelete } from "react-icons/ai"
import { CiMaximize1 } from "react-icons/ci"

function Card(props) {

    let setShow = props.setShow;

    let setIndex = props.setIndex;

    let note = props.note;
    let title = note.title;
    let desp1 = note.desp;
    let id = note.id;
    let desp = "";
    let prev = 0;
    //console.log(desp1.length);
    if (desp1.length > 45) {
        console.log("hi")
        for (let i = 0; i < 300; i++) {
            let slice = desp1.substr(prev, 45);
            if (i % 45 === 0) {
                prev = i + 2;
                desp += '\n';
                desp += slice;
            }
        }
        desp = desp.substr(0, 350) + "..."
    }
    else {
        desp = desp1;
    }
    // desp = desp1
    let removeNote = props.removeNote;
    function handleMaximize() {
        // alert("This feature will be added soon...");
        setIndex(id);
        setShow(true);
    }
    //console.log("Desp:  ", desp)
    return (
        <div className='card'>
            <AiFillDelete className='delete-icon' onClick={() => removeNote(id)} />
            <CiMaximize1 className='maximize' onClick={handleMaximize} />
            <div className='title'>{title}</div>
            <div className='desp'>
                {desp}
                {/* <li key={id}>
                    {desp.split('\n').map((line, lineIndex) => (
                        <span key={lineIndex}>
                            {line}
                            <br />
                        </span>
                    ))}
                </li> */}
            </div>

        </div>
    )
}
export default Card;

