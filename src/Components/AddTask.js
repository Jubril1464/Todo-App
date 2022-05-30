import { useState } from "react";
import '../index.css'
import Swal from 'sweetalert2'
const AddTask = ({onSave}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text && !day){
            Swal.fire({
                icon:'error',
                title: 'Ooops....',
                text:'Fill in your task and date or close the form!'
            })

        } else if (!text && day){
            Swal.fire({
                icon:'error',
                title:'Ooops...',
                text:'Fill in your task!'
            })
        } else if(text && !day){
            Swal.fire({
                icon:'error',
                title:'Ooops...',
                text:'Fill in your day'
            })
        } else {
            onSave({text, day})
        }
        setText('');
        setDay('')


        
    }

    return(
        <div>
            <form  className="form" onSubmit={onSubmit}>
                <div className="form__group">
                <label htmlFor="text" className="form__label">Text</label>
                    <input type="text" 
                    className="form__input"
                    id='text'
                    placeholder="Text"
                    value={text}
                    onChange={ (e) => setText(e.target.value)} />
                   
                </div>
                <div className="form__group">
                <label htmlFor="day" className="form__label">Day & Time</label>
                    <input type="text"
                     className="form__input"
                     id='day'
                     placeholder="Day & Time"
                     value={day}
                     onChange= { (e) => setDay(e.target.value)} />
                   
                </div>
               
                <input type="submit" className="btn btn--block" value='Save Task'  />
               


            </form>

        </div>
    )
}
export default AddTask