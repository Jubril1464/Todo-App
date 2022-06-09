import { useState } from "react";
import '../index.css'
import Swal from 'sweetalert2'
const AddTask = ({onSave, edit}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('')
    const onSubmit = (e) => {
        e.preventDefault();
        if(!text && !date){
            Swal.fire({
                icon:'error',
                title: 'Ooops....',
                text:'Fill in your task and date or close the form!'
            })

        } else if (!text && date){
            Swal.fire({
                icon:'error',
                title:'Ooops...',
                text:'Fill in your task!'
            })
        } else if(text && !date){
            Swal.fire({
                icon:'error',
                title:'Ooops...',
                text:'Fill in your day'
            })
        } else {
            onSave({text, date,time})
        }
        setText('');
        setDate('')


        
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
                <label htmlFor="day" className="form__label">Date</label>
                    <input type="date"
                     className="form__input"
                     id='day'
                     placeholder="Day & Time"
                     value={date}
                     onChange= { (e) => setDate(e.target.value)} />
                   
                </div>
                <div className="form__group">
                <label htmlFor="day" className="form__label">Time</label>
                    <input type="time"
                     className="form__input"
                     id='time'
                     placeholder="Time"
                     value={time}
                     onChange= { (e) => setTime(e.target.value)} />
                   
                </div>
               
                <input type="submit" className="btn btn--block" value='Save Task'  />
               


            </form>
          
        </div>
        
    )
}
export default AddTask