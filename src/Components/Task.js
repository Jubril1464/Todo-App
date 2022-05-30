import {FaPencilAlt, FaTimes} from 'react-icons/fa';
import '../index.css'
const Task = ({task, onDelete, onEdit}) => {
    
    return( 
    <div>
        <div className="task">
            <div>
                <p className="taskName"><span className="textBold">Task-Name: </span>{task.text}</p>
                <p className="taskDate"><span className="textBold">Date of completion:  </span>{task.day}</p>
            </div>
            <div>
                <p><FaPencilAlt onClick={() => onEdit(task.id)} className='editIcon'></FaPencilAlt></p>
                <p><FaTimes onClick={() => onDelete(task.id)} className='delIcon'></FaTimes></p>
            </div>
        </div>

    </div>
    )
}
export default Task