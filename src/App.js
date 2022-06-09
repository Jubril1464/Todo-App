import { useState, useEffect } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Tasks from './Components/Tasks';
import Header from './Components/Header';
import './index.css';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'






function App() {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const getTasks = JSON.parse(localStorage.getItem('taskAdded'));
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, [])




  useEffect(() => {
    if (!getTasks) {
      setTasks([])

    } else {
      setTasks(getTasks)
    }

  }, [])
  const addTask = (task) => {
    const id = uuidv4();
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    Swal.fire({
      icon: 'success',
      title: 'Yah...',
      text: 'You have succesfully added a new task',
      timer: 2000
    })
    localStorage.setItem('taskAdded', JSON.stringify([...tasks, newTask]))

  }
  const deleteTask = (id) => {
    alert('Are you sure you want to delete your task?')

    const deleteTask = tasks.filter((task) => task.id !== id);
    setTasks(deleteTask);
    Swal.fire({
      icon: 'success',
      title: 'Yup...',
      text: 'You have successfully deleted a task',
      timer: 2000
    })
    localStorage.setItem('taskAdded', JSON.stringify(deleteTask))


  }
  const editTask = (id) => {
   
    const text = prompt('Enter new task');
    if (!text) {
      Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: 'Please fill in your task!!!'

      })

    } 
      else {
        const data = JSON.parse(localStorage.getItem('taskAdded'));
        const myData = data.map(x => {
          if (x.id === id) {
            return {
              ...x,
              text: text,
              id: uuidv4()
            }

          }
          return x

        })
        Swal.fire({
          icon: 'success',
          title: 'Yup...',
          text: 'You have sucessfully edited a task',
          timer: 2000
        })
        localStorage.setItem('taskAdded', JSON.stringify(myData));
        window.location.reload()
      }


    


  }

  return (
    <>
      <div className="app__container">

        <div className='container' data-aos='zoom-in' data-aos-duration='4000'>
          <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />

           {showAddTask && <AddTask onSave={addTask}  />}
          {
            tasks.length > 0 ?
              (<Tasks tasks={tasks} onDelete={deleteTask} onEdit={editTask} />) :
              ('No task found!!!')
          }
          {tasks.length > 0 && <p>{`${tasks.length} tasks found!!!`}</p>}

           </div>
      </div>
    </>

  );
}

export default App;
